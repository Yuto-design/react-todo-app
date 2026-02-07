import { TimerProvider } from '../features/timer/context/TimerContext'
import Timer from '../features/timer/components/Timer'

const TimerPage = () => {
    return (
        <TimerProvider>
            <Timer />
        </TimerProvider>
    )
}

export default TimerPage