import { useContext, useState } from 'react'

import { CharactersContext } from 'context/CharactersContext'
import getCharacters from 'services/getCharacters'

export const useListCharacters = () => {
  const {
    characters,
    setCharacters,
    setSingleCharacter,
    singleCharacter,
    pagination,
    setPagination
  } = useContext(CharactersContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ message: '', error: false })
  const { offset, page } = pagination

  const getNewCharacter = async () => {
    if (page === 0) {
      setLoading(true)
      try {
        const { results } = await getCharacters({ offset: offset })
        setLoading(false)
        setCharacters(results)
        setPagination({ offset: offset + 20, page: page + 1 })
      } catch (err) {
        setError({ message: err, error: true })
        setLoading(false)
      }
    }
  }

  const getNextCharacters = async () => {
    if (page !== 0) {
      setLoading(true)
      try {
        const { results } = await getCharacters({ offset: offset })
        setLoading(false)
        setCharacters(prev => prev.concat(results))
        setPagination({ offset: offset + 20, page: page + 1 })
      } catch (err) {
        setError({ message: err, error: true })
        setLoading(false)
      }
    }
  }

  const getCharacterByName = async ({ name }) => {
    try {
      setLoading(true)
      const { results } = await getCharacters({ name: name })
      setLoading(false)
      setSingleCharacter(results[0])
      setPagination({ offset: 0, page: 0 })
      const data = results.length ? results[0] : null
      return { data }
    } catch (err) {
      setError({ message: err, error: true })
      setLoading(false)
    }
  }

  const clearSingleCharacter = () => {
    setSingleCharacter(null)
  }

  return {
    characters,
    singleCharacter,
    loading,
    error,
    getNewCharacter,
    getNextCharacters,
    getCharacterByName,
    clearSingleCharacter
  }
}

export default useListCharacters
