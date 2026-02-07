export const initialState = {
    isRunning: false,
    startTime: null,
    elapsedTime: 0
}

export const timerReducer = (state, action) => {
    switch (action.type) {
        case 'START':
            return {
                ...state,
                isRunning: true,
                startTime: Date.now()
            }

        case 'STOP':
            return {
                ...state,
                isRunning: false,
                elapsedTime:
                    state.elapsedTime + (Date.now() - state.startTime),
                startTime: null
            }

        case 'RESET':
            return initialState

        default:
            return state

    }
}