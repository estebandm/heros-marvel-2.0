import React, { useEffect } from 'react'

import useListComics from 'hooks/useListComics'
import Comics from 'components/Comics'
import { SpinnerStyle, ContainerSkeleton } from 'components/core/Spinner/styles'

export const ComicsPage = () => {
  const { loading, getNewComics } = useListComics()

  useEffect(() => {
    getNewComics()
  }, [])

  if (loading) {
    return (
      <ContainerSkeleton>
        <SpinnerStyle />
      </ContainerSkeleton>
    )
  }

  return (
    <main>
      <Comics />
    </main>
  )
}

export default ComicsPage
