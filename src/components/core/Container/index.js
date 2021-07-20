import React from 'react'

import { Div, Section } from './styles.js'

export const Container = ({
  component = 'div',
  children
}) => {
  const tags = {
    div: <Div>{children}</Div>,
    section: <Section>{children}</Section>
  }

  const tag = tags[component] ? tags[component] : tags.div

  return (tag)
}

export default Container
