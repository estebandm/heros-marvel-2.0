import { API_URL, API_KEY, API_HASH } from './settings'

export const getComics = async ({
  offset = '0',
  url = null
}) => {
  if (url) {
    const res = await fetch(`${url}?offset=${offset}&ts=1&apikey=${API_KEY}&hash=${API_HASH}`)
    const { data: { results } } = await res.json()
    return { results }
  }
  const res = await fetch(`${API_URL}comics?offset=${offset}&ts=1&apikey=${API_KEY}&hash=${API_HASH}`)
  const { data: { results } } = await res.json()

  return { results }
}

export default getComics
