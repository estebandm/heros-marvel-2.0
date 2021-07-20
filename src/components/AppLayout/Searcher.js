import { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import useListCharacters from 'hooks/useListCharacters'
import useListComics from 'hooks/useListComics'

import {
  ButtonStyled,
  InputStyled,
  FormStyled,
  HeaderContainerSearcher,
  LinkStyle
} from './styles.js'

export const Searcher = () => {
  const formRef = useRef()
  const history = useHistory()
  const [valueSearch, setValueSearch] = useState('')
  const { getCharacterByName, clearSingleCharacter } = useListCharacters()
  const { getComicsById, clearComics } = useListComics()

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    if (valueSearch === '') {
      return
    }
    clearComics()
    clearSingleCharacter()
    const { data } = await getCharacterByName({ name: valueSearch })
    if (data) {
      data.comics.items.map((comic) => (
        getComicsById({ url: comic.resourceURI })
      ))
      history.push(`/marvel/characters/${data.id}/comics`)
    } else {
      history.push('/marvel/not_found')
    }
  }

  const handleOnChange = (e) => {
    setValueSearch(e.target.value)
  }

  return (
    <HeaderContainerSearcher>
      <LinkStyle to="/marvel/characters">
        Heros Marvel
      </LinkStyle>
      <FormStyled
        name='search'
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
        ref={formRef}
        value={valueSearch}
      >
        <InputStyled placeholder='   Buscar'/>
        <ButtonStyled>
            Buscar
        </ButtonStyled>
      </FormStyled>
    </HeaderContainerSearcher>
  )
}
export default Searcher
