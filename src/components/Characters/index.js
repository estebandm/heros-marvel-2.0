import { useContext } from 'react'

import { CharactersContext } from 'context/CharactersContext'
import useListCharacters from 'hooks/useListCharacters'

import ContainerCard from 'components/Card/ContainerCard'
import Container from 'components/core/Container'
import { SpinnerStyle, AlignItemStyle } from 'components/core/Spinner/styles'
import 'index.css'

const Characters = () => {
  const { characters } = useContext(CharactersContext)
  const { getNextCharacters, loading } = useListCharacters()
  const handleOnClick = () => {
    getNextCharacters()
  }

  return (
    <Container component='section'>
      <ContainerCard items={characters}/>
      <AlignItemStyle >
        {loading
          ? <SpinnerStyle top='-10%'/>
          : <button className='button' onClick={handleOnClick}>
            Más personajes
          </button>
        }
      </AlignItemStyle>
    </Container>
  )
}

export default Characters
