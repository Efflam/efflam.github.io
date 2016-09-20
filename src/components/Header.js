import React from 'react'
import {blue} from '../constants/colors'
import {style} from 'glamor'

export default ({name}) => (
  <header
    {...style({
      paddingTop: '5rem',
      paddingBottom: '1rem',
      color: blue,
      fontSize: '1.3rem',
      fontWeight: 'bold',
    })}
  >
    {name}
  </header>
) 