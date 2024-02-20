import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="bg-neutral-white p-2 focus:outline-none focus:ring-1 cursor-pointer dark:bg-neutral-black"
    >
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  )
}

export default ThemeToggler
