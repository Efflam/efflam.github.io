import React from 'react'
import {style, merge, hover} from 'glamor'
import * as colors from '../constants/colors'
import theme from '../theme'

export default ({href, children, fat=false}) => (
  <a 
    href={href}
    {...merge(
      {
        fontWeight: 'bold',
        color: theme.accent,
        textDecoration: 'none',
        boxShadow:  `0 1px 0 ${theme.border}`,
        transition: 'box-shadow .3s cubic-bezier(0.19, 1, 0.22, 1)'
      },
      hover({
        boxShadow:  `0 ${fat?6:3}px 0 ${theme.accent}`,
      })
    )}
  >
    {children}
  </a>
) 

