import { Link } from 'react-router-dom'
import styled from 'styled-components'

import urlMarvel from 'assets/images/marvel.svg'
import urlSkyscraper from 'assets/images/skyscraper.png'

export const DivPicture = styled.div`
    height: 150px;
    background-image:
        url(${urlMarvel}),
        url(${urlSkyscraper}),
        linear-gradient(to bottom, #163C52 0%,#4F4F47 30%,#C5752D 60%,#B7490F 80%, #2F1107 100%);
    background-size: 10%, contain, auto;
    background-position: center 30%, bottom;
    background-repeat: no-repeat, repeat-x;
`

export const ButtonStyled = styled.button`
    margin-left: .2rem;
    height: 28px;
    border-radius: 4px;
    border: 1px solid white;
    font-size: 0.90rem;
    color: white;
    background-color: #C5752D;
    cursor: pointer;
    padding: 0 2rem;
    margin-left: 1rem;
    @media (max-width: 600px) {
       padding: 0 .2rem;
    }
`

export const InputStyled = styled.input`
    margin: 0;
    padding: 2px 5px;
    font-size: 1rem;
    border-radius: 3px;
    outline: none;
    border: none;
    min-width: 170px;
    height: 24px;
    font-weight: bold;
    color: var(--skyBlue);
    &::placeholder{
        font-family: "Font Awesome 5 Free";
        font-weight: 600;
    }
    @media (max-width: 600px) {
        min-width: unset;
        width: 20px;    
        background-color: unset;
        padding: .2rem;
        transition: width .3s;
        &::placeholder{
            color: white;
        }
        &:focus{                                    
            background-color: white;
            width: 100%;  
            &::placeholder{                
                color: var(--skyBlue);
            }
        }
    }
`

export const FormStyled = styled.form`
    display: flex;
    align-items: center;
     @media (max-width: 600px) {
        width: 50%;
        justify-content: flex-end;
    }
`
export const HeaderContainerSearcher = styled.header`
    width: 100%;
    height: 48px;
    background-color: var(--gray);
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 500;
    @media (max-width: 600px) {
       top: -1px;
    }
`
export const LinkStyle = styled(Link)`
    font-family: 'Comic Neue', cursive;
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
    @media (max-width: 600px) {
        font-size: 1rem;
    }
`
