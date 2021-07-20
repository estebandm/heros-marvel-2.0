import { createContext, useState } from 'react'

export const ComicsContext = createContext()

const initialState = {
  offset: 0,
  page: 0
}

const Provider = ({ children }) => {
  const [comics, setComics] = useState([])
  const [pagination, setPagination] = useState(initialState)
  const value = {
    comics,
    setComics,
    pagination,
    setPagination
  }

  return <ComicsContext.Provider value={value}>
    {children}
  </ComicsContext.Provider>
}

export default {
  Provider,
  Context: ComicsContext.Consumer
}
