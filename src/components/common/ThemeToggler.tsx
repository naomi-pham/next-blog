import { useTheme } from 'next-themes'
import { ChangeEvent, useEffect, useState } from 'react'

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <select
      value={theme}
      onChange={handleThemeChange}
      className="cursor-pointer bg-neutral-white p-2 focus:outline-none focus:ring-1 dark:bg-neutral-black"
    >
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  )
}

export default ThemeToggler
