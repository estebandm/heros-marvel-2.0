import { useContext, useState } from 'react'

import { ComicsContext } from 'context/ComicsContext'
import getComics from 'services/getComics'

export const useListComics = () => {
  const {
    comics,
    setComics,
    pagination,
    setPagination
  } = useContext(ComicsContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ message: '', error: false })
  const { offset, page } = pagination

  const getNewComics = async () => {
    setLoading(true)
    try {
      const { results } = await getComics({ offset: offset })
      setLoading(false)
      setComics(results)
      setPagination({ offset: offset + 20, page: page + 1 })
    } catch (err) {
      setError({ message: err, error: true })
      setLoading(false)
    }
  }

  const getNextComics = async () => {
    setLoading(true)
    try {
      const { results } = await getComics({ offset: offset })
      setLoading(false)
      setComics(prev => prev.concat(results))
      setPagination({ offset: offset + 20, page: page + 1 })
    } catch (err) {
      setError({ message: err, error: true })
      setLoading(false)
    }
  }

  const getComicsById = async ({ url }) => {
    setLoading(true)
    try {
      const { results } = await getComics({ url, offset: offset })
      setLoading(false)
      setComics(prev => prev.concat(results))
      setPagination({ offset: offset + 20, page: page + 1 })
    } catch (err) {
      setError({ message: err, error: true })
      setLoading(false)
    }
  }

  const clearComics = () => {
    setComics([])
  }

  return {
    comics,
    loading,
    error,
    getNewComics,
    getNextComics,
    getComicsById,
    clearComics
  }
}

export default useListComics
