import React from 'react'

import Searcher from './Searcher'
import { DivPicture } from './styles.js'

export const AppLayout = ({ children }) => {
  return (
    <>
      <picture>
        <DivPicture/>
      </picture>

      <Searcher/>

      {children}
    </>
  )
}

export default AppLayout
