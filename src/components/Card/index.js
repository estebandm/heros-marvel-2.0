import React from 'react'

import {
  ImgCardStyle,
  CardStyle,
  TitleCard,
  NotFoundStyle,
  PictureStyle,
  FigcaptionStyle,
  AnchorStyle
} from './styles'

const Card = ({ key, img, name, wiki, description }) => {
  const notFound = img.includes('not_available')
  const handleOnClick = () => {
    window.open(wiki)
  }
  return (
    <CardStyle key={key}>
      <PictureStyle>
        <ImgCardStyle src={img} />
        {notFound && <NotFoundStyle>Not found</NotFoundStyle>}
        <FigcaptionStyle>
          <p>
            {description || 'No description'}
          </p>
          <AnchorStyle onClick={handleOnClick}>
            Ver en la wiki
          </AnchorStyle>
        </FigcaptionStyle>
      </PictureStyle>
      <TitleCard>{name}</TitleCard>
    </CardStyle>
  )
}

export default Card
