import React from 'react'
import {style} from 'glamor'

export default ({children}) => (
  <h2
    {...style({
      margin: 0,
      marginBottom: '2rem',
      fontSize: '1.25rem'
    })}
  >
    {children}
  </h2>
) 