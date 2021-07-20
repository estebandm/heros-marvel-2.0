import { useState, useEffect } from 'react'

const useMediaQuery = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [breakPoint, setBreakPoint] = useState(null)

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth)
    }

    addEventListener('resize', resize)
    if (width < 600) {
      setBreakPoint('xs')
    } else if (width < 960 && width >= 600) {
      setBreakPoint('sm')
    } else if (width < 1366 && width >= 960) {
      setBreakPoint('md')
    } else if (width < 1920 && width >= 1366) {
      setBreakPoint('lg')
    } else {
      setBreakPoint('xl')
    }

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return {
    width,
    breakPoint
  }
}

export default useMediaQuery
