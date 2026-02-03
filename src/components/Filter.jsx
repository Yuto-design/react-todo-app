import { useTodo } from '../hooks/useTodo'

const Filter = () => {
    const { filter, setFilter } = useTodo();

    return (
        <div className="filters">
            <button
                onClick={() => setFilter('all')}
                className={filter === 'all' ? 'active' : ''}
            >
                All
            </button>

            <button
                onClick={() => setFilter('active')}
                className={filter === 'active' ? 'active' : ''}
            >
                Activate
            </button>

            <button
                onClick={() => setFilter('completed')}
                className={filter === 'completed' ? 'active' : ''}
            >
                Completed
            </button>
        </div>
    )
}

export default Filter