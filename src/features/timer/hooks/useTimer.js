import { useContext, useEffect } from 'react'
import { TimerContext } from '../context/TimerContext'

export const useTimer = () => {
    const context = useContext(TimerContext)

    if (!context) {
        throw new Error('useTimer must be used within a TimerProvider')
    }

    const { state, dispatch } = context

    useEffect(() => {
        const today = new Date().toDateString()
        if (state.date !== today) {
            dispatch({ type: 'RESET_DAY' })
        }
    }, [state.date, dispatch])

    const start = () => dispatch({ type: 'START' })
    const stop = () => dispatch({ type: 'STOP' })
    const reset = () => dispatch({ type: 'RESET' })

    const currentTime = state.isRunning
        ? state.elapsedTime + (Date.now() - state.startTime)
        : state.elapsedTime

    return {
        isRunning: state.isRunning,
        time: currentTime,
        todayTotal: state.todayTotal,
        history: state.history,
        start,
        stop,
        reset
    }
}