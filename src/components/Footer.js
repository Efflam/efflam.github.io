import React from 'react'
import {style} from 'glamor'
import * as colors from '../constants/colors'
import Section from './Section'
import theme from '../theme'

export default ({copyright}) => (
  <Section
    {...style({
      color: theme.secondary
    })}
  >
    {copyright}
  </Section>
) 