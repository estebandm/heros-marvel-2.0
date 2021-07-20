import { API_URL, API_KEY, API_HASH } from './settings'

export const getCreators = async ({
  offset = '0'
}) => {
  return fetch(`${API_URL}creators?offset=${offset}&ts=1&apikey=${API_KEY}&hash=${API_HASH}`)
    .then(res => res.json())
    .then(dataApi => dataApi.data.results)
}

export default getCreators
