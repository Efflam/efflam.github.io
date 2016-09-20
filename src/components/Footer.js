import React from 'react'
import {style} from 'glamor'
import {gray} from '../constants/colors'

export default ({copyright}) => (
  <footer
    {...style({
      color: gray,
      paddingTop: '6rem',
      paddingBottom: '3rem'
    })}
  >
    {copyright}
  </footer>
) 