import { createContext, useState } from 'react'

export const CharactersContext = createContext()

const initialState = {
  offset: 0,
  page: 0
}

const Provider = ({ children }) => {
  const [characters, setCharacters] = useState([])
  const [singleCharacter, setSingleCharacter] = useState(null)
  const [pagination, setPagination] = useState(initialState)
  const value = {
    characters,
    setCharacters,
    setSingleCharacter,
    singleCharacter,
    pagination,
    setPagination
  }

  return <CharactersContext.Provider value={value}>
    {children}
  </CharactersContext.Provider>
}

export default {
  Provider,
  Context: CharactersContext.Consumer
}
