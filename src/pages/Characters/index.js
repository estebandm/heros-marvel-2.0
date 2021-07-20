import React, { useEffect } from 'react'

import useListCharacters from 'hooks/useListCharacters'
import Characters from 'components/Characters'
import { SpinnerStyle, ContainerSkeleton } from 'components/core/Spinner/styles'

export const CharactersPage = () => {
  const { loading, getNewCharacter } = useListCharacters()

  useEffect(() => {
    getNewCharacter()
  }, [])

  if (loading) {
    return (
      <ContainerSkeleton>
        <SpinnerStyle/>
      </ContainerSkeleton>
    )
  }

  return (
    <main>
      <Characters />
    </main>
  )
}

export default CharactersPage
