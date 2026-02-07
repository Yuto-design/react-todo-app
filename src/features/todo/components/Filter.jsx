import { useTodo } from '../hooks/useTodo'

const Filter = () => {
    const { filter, setFilter, isEditing } = useTodo();

    return (
        <div className="filters">
            <button
                onClick={() => {
                    if (isEditing) {
                        alert('There is a task being edited.')
                        return
                    }
                    setFilter('all')
                }}
                className={filter === 'all' ? 'active' : ''}
            >
                All
            </button>

            <button
                onClick={() => {
                    if (isEditing) {
                        alert('There is a task being edited.')
                        return
                    }
                    setFilter('active')
                }}
                className={filter === 'active' ? 'active' : ''}
            >
                Active
            </button>

            <button
                onClick={() => {
                    if (isEditing) {
                        alert('There is a task being edited.')
                        return
                    }
                    setFilter('completed')
                }}
                className={filter === 'completed' ? 'active' : ''}
            >
                Completed
            </button>
        </div>
    )
}

export default Filter