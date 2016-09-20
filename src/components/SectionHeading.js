import React from 'react'
import {style} from 'glamor'

export default ({children}) => (
  <h2
    {...style({
      fontSize: '1.2rem'
    })}
  >
    {children}
  </h2>
) 