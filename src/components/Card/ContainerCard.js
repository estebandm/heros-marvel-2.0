import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import { CharactersContext } from 'context/CharactersContext'
import { ContainerCardStyle, CardHeaderStyle, ImgStyle } from './styles'
import Card from './index.js'

const ContainerCard = ({ items, name }) => {
  const location = useLocation()
  const nameProp = name === 'comics' ? 'title' : 'name'
  const { singleCharacter } = useContext(CharactersContext)

  return (
    <>
      {(singleCharacter &&
        location.pathname.includes(`/marvel/characters/${singleCharacter.id}/comics`)) &&
        <CardHeaderStyle>
          <ImgStyle
            src={`${singleCharacter.thumbnail.path}/portrait_incredible.${singleCharacter.thumbnail.extension}`}>
          </ImgStyle>
        </CardHeaderStyle>
      }
      <ContainerCardStyle>
        {items.map(item => {
          const imgPath = `${item.thumbnail.path}/portrait_incredible.${item.thumbnail.extension}`
          return (
            <Card
              description={item.description}
              img={imgPath.replace('http', 'https')}
              key={item.id}
              name={item[nameProp]}
              wiki={item.urls[0].url}
            />
          )
        })}
      </ContainerCardStyle>
    </>
  )
}

export default ContainerCard
