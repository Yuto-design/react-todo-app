import { createContext, useReducer, useEffect } from 'react'
import { timerReducer, initialState } from '../reducer/timerReducer'

export const TimerContext = createContext(null)

const STORAGE_KEY = 'timer-state'

const loadFromStorage = () => {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) return null

    try {
        return JSON.parse(data)
    } catch {
        return null
    }
}

export const TimerProvider = ({ children  }) => {
    const stored = loadFromStorage()

    const [state, dispatch] = useReducer(
        timerReducer,
        stored
            ? {
                ...initialState,
                todayTotal: stored.todayTotal,
                date: stored.date,
                history: stored.history || {}
            }
            : initialState
    )

    useEffect(() => {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                todayTotal: state.todayTotal,
                date: state.date,
                history: state.history
            })
        )
    }, [state.todayTotal, state.date, state.history])

    return (
        <TimerContext.Provider value={{ state, dispatch }}>
            {children}
        </TimerContext.Provider>
    )
}