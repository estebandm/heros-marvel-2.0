import styled from 'styled-components'

export const ContainerCardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(216px,1fr));
  gap: 1rem;
  justify-items: center;
  align-items: center;
  margin-top: 2rem;
`
export const CardStyle = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffd3ac;
  border-radius: 2px;
  min-height: 250px;
  width: 216px;
  overflow: hidden;
  &:after{
    content: "";
    position: absolute;
    right: -8px;
    bottom: -8px;
    width: 15px;
    height: 25px;
    z-index: 40;
    background-image: var(--app-background);
    background-size: 6px 6px;
    background-position: 0 0,3px 3px;
    transform: rotate(45deg);
  }
`

export const CardHeaderStyle = styled.header`
  width: 100%;
  height: 324px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`

export const ImgCardStyle = styled.img`
width: 100%;
transition: transform .2s; 
z-index: 2;
&:hover{
  transform: scale(1.1); 
}
`

export const TitleCard = styled.h1`
  font-size: 1.5rem;
  font-family: 'Boogaloo', cursive;
  color: var(--blue);
  padding: 1rem 0.5rem;
  text-align: center;
`

export const NotFoundStyle = styled.p`
  position: absolute;
  top: 40%;
  left: 15%;
  text-align: center;
  font-size: 1.8rem;
  color: white;
  cursor: default;
  font-family: 'Russo One', sans-serif;
`

export const PictureStyle = styled.picture`
  overflow: hidden;  
  &:hover figcaption{
    display: flex;
    align-items: center;
    justify-content: center;
    a{
      display: flex;
      justify-content: center;
    }
  }
  &:hover figcaption:hover{
    background-color: rgba(0,0,0, .7);
    transition: background-color .3s;
    a{
      background-color: #f44336;
      transition: background-color .3s;
      &:hover{
        background-color: #b62015;
        font-size: 1.6rem;
        transition: font-size .3s;        
      }
    }
  &::-webkit-scrollbar{
    width: 7px;
  }  
  }
  `
export const FigcaptionStyle = styled.figcaption`
  position: absolute;
  top: 0;
  left: 0;
  height: 324px;
  width: 100%;  
  display: none;
`

export const AnchorStyle = styled.a`
  text-align: center;
  display: none;
  font-family: 'Francois One', sans-serif;
  width: 100%;
  height: 100%;
  color: white;
  padding-top: 1rem;
  font-size: 1.5rem;
  position: absolute;
  top: 100%;
  cursor: pointer;
  left: 0;
  border: none;
`
export const ImgStyle = styled.img`
  border-radius: 8px;
`
