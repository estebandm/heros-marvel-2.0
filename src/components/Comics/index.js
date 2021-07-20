import { useContext } from 'react'

import { ComicsContext } from 'context/ComicsContext'
import useListComics from 'hooks/useListComics'

import ContainerCard from 'components/Card/ContainerCard'
import NotFound from 'components/NotFound'
import Container from 'components/core/Container'
import { SpinnerStyle, AlignItemStyle } from 'components/core/Spinner/styles'
import 'index.css'

export const Comics = () => {
  const { comics } = useContext(ComicsContext)
  const { loading, error, getNextComics } = useListComics()

  const handleOnClick = () => {
    getNextComics()
  }

  if (error.error) {
    return (<NotFound/>)
  }
  return (
    <Container component='section'>
      <ContainerCard items={comics} name='comics'/>
      <AlignItemStyle >
        {(loading || !comics.length)
          ? <SpinnerStyle/>
          : <button
            className='button'
            onClick={handleOnClick}>
              Más Comics
          </button> }
      </AlignItemStyle>
    </Container>
  )
}

export default Comics
