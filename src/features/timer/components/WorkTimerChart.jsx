import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts'
import { useTimer } from '../hooks/useTimer'

const formatMsToHour = (ms) => {
    return Math.round((ms/ 3600000) * 10) / 10
}

const formatDateLabel = (dateStr) => {
    const d = new Date(dateStr)
    return `${d.getMonth() + 1}/${d.getDate()}`
}

const WorkTimeChart = () => {
    const { history, todayTotal } = useTimer()

    const rawEntries = [
        ...Object.entries(history),
        [new Date().toDateString(), todayTotal]
    ]

    const data = rawEntries
        .sort((a, b) => new Date(a[0]) - new Date(b[0]))
        .map(([date, time]) => ({
        date: formatDateLabel(date),
        hours: formatMsToHour(time)
    }))

    if (data.length === 0) {
        return <p>There is no data yet to graph.</p>
    }

    return (
        <div style={{ width: '100%', height: 250 }}>
            <h3>Daily Working Hours</h3>

            <ResponsiveContainer>
                <BarChart data={data}>
                    <XAxis dateKey="date" />
                    <YAxis unit="h" />
                    <Tooltip />
                    <Bar dateKey="hours" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default WorkTimeChart