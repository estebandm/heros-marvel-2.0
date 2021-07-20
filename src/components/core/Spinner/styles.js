import styled from 'styled-components'

export const ContainerSkeleton = styled.div`
   height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SpinnerStyle = styled.div`
    border: 4px solid rgba(0, 0, 0, .1);
    position: absolute;
    left: 50%;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border-left-color: #09f;
    animation: spin 1s ease infinite;
    margin: 2rem auto;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export const AlignItemStyle = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`
