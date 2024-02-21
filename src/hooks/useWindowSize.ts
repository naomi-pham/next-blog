import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', windowSizeHandler)

    return () => {
      window.removeEventListener('resize', windowSizeHandler)
    }
  }, [])

  return windowSize
}

export default useWindowSize
