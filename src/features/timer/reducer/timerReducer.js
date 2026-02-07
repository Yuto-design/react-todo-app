export const initialState = {
    isRunning: false,
    startTime: null,
    elapsedTime: 0,
    todayTotal: 0,
    date: new Date().toDateString()
}

export const timerReducer = (state, action) => {
    switch (action.type) {
        case 'START':
            return {
                ...state,
                isRunning: true,
                startTime: Date.now()
            }

        case 'STOP':{
            const workedTime = Date.now() - state.startTime

            return {
                ...state,
                isRunning: false,
                startTime: null,
                elapsedTime: state.elapsedTime + workedTime,
                todayTotal: state.todayTotal + workedTime
            }
        }

        case 'RESET':
            return {
                ...state,
                elapsedTime: 0
            }

        case 'RESET_DAY':
            return {
                ...state,
                todayTotal: 0,
                date: new Date().toDateString()
            }

        default:
            return state

    }
}