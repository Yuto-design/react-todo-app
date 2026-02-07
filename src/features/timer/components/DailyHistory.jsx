import { useTimer } from '../hooks/useTimer'

const formatTime = (ms) => {
    const h = Math.floor(ms / 3600000)
    const m = Math.floor((ms % 3600000) / 60000)
    return `${h}h ${m}m`
}

const DailyHistory = () => {
    const { history } = useTimer()

    const entries = Object.entries(history).reverse()

    return (
        <div>
            <h3>Daily History</h3>
            {entries.length === 0 && <p>No history available</p>}
            <ul>
                {entries.map(([date, time]) => (
                    <li key={date}>
                        {date} : {formatTime(time)}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DailyHistory