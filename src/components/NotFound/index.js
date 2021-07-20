import React from 'react'

import { NotFoundStyle, ImgStyle } from './styles'
import NotFoundImg from 'assets/images/404-marvel.jpg'

export const NotFound = () => {
  return (
    <NotFoundStyle>
      <ImgStyle src={NotFoundImg}/>
    </NotFoundStyle>
  )
}

export default NotFound
