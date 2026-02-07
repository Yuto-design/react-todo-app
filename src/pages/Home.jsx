import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getTodayTotal } from '../utils/timerStorage'

const formatTime = (ms) => {
    const h = Math.floor(ms / 3600000)
    const m = Math.floor((ms % 3600000) / 60000)
    return `${h}h ${m}m`
}

const Home = () => {
    const [todayTotal, setTodayTotal] = useState(0)

    useEffect(() => {
        setTodayTotal(getTodayTotal())
    }, [])
    return (
        <div className="home">
            <h1>Home</h1>
            <p>Today's Working Time:{formatTime(todayTotal)}</p>

            <div className="home-links">
                <Link to="/todo">Todo App</Link>
                <Link to="/timer">Working Time Record App</Link>
            </div>
        </div>
    )
}

export default Home
