import { useEffect, useState } from 'react'
import { useTimer } from '../hooks/useTimer'
import DailyHistory from './DailyHistory'
import WorkTimeChart from './WorkTimerChart'

const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

const Timer = () => {
    const {
        time,
        todayTotal,
        isRunning,
        start,
        stop,
        reset
    } = useTimer()

    const [, setTick] = useState(0)

    useEffect(() => {
        if (!isRunning) return

        const interval = setInterval(() => {
            setTick(t => t + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [isRunning])

    return (
        <div>
            <h2>Current Timer</h2>
            <p>{formatTime(time)}</p>

            {!isRunning ? (
                <button onClick={start}>Start</button>
            ) : (
                <button onClick={stop}>Stop</button>
            )}

            <button onClick={reset}>Reset</button>

            <hr />

            <h3>Today's Total</h3>
            <p>{formatTime(todayTotal)}</p>

            <hr />

            <DailyHistory />

            <hr />

            <WorkTimeChart />
        </div>
    )
}

export default Timer