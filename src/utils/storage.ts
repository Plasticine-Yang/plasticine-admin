export const storage = {
  getItem<T = any>(key: string): T | null {
    const item = localStorage.getItem(key)
    let res: T | null = null

    try {
      if (item !== null) {
        res = JSON.parse(item)
      }
    } catch (error) {
      console.error('storage.getItem error', error)
      res = null
    }

    return localStorage.getItem(key) as T
  },

  setItem<T = any>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value))
  },
}
