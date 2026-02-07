import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
        <h1>Home</h1>

        <div className="home-links">
            <Link to="/todo">Todo App</Link>
            <Link to="/timer">Working Time Record App</Link>
        </div>
        </div>
    )
}

export default Home
