import React from 'react'
import {style} from 'glamor'
import * as colors from '../constants/colors'
import Section from './Section'

export default ({copyright}) => (
  <Section
    {...style({
      color: colors.black40,
    })}
  >
    {copyright}
  </Section>
) 