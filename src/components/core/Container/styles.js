import styled from 'styled-components'

export const Div = styled.div`
width: 80%;
  margin-left: auto;
  margin-right: auto;
`
export const Section = styled.section`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`
/*
${
  props => {
    const widthCalc = (props.width - (props.width * 0.15)) + 'px'

    return `
      width: ${widthCalc};
    `
  }
} */
