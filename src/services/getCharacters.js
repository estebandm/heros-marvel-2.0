import { API_URL, API_KEY, API_HASH } from './settings'

export const getCharacters = async ({
  offset = '0',
  name = null
}) => {
  if (name) {
    const res = await fetch(`${API_URL}characters?name=${name}&offset=${offset}&ts=1&apikey=${API_KEY}&hash=${API_HASH}`)
    const { data: { results } } = await res.json()
    return { results }
  }
  const res = await fetch(`${API_URL}characters?&offset=${offset}&ts=1&apikey=${API_KEY}&hash=${API_HASH}`)
  const { data: { results } } = await res.json()
  return { results }
}

export default getCharacters
