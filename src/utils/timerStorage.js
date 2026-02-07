const STORAGE_KEY = 'timer-state'

export const getTodayTotal = () => {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) return 0

    try {
        const parsed = JSON.parse(data)
        const today = new Date().toDateString()

        if (parsed.date !== today) return 0
        return parsed.todayTotal || 0
    } catch {
        return 0
    }
}