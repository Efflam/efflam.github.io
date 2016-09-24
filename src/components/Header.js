import React from 'react'
import * as colors from '../constants/colors'
import {style} from 'glamor'

export default ({name}) => (
  <header
    {...style({
      paddingTop: '8rem',
      paddingBottom: '1rem',
      color: colors.blue,
      fontSize: '1.3rem',
      fontWeight: 'bold',
    })}
  >
    {name}
  </header>
) 