import React from 'react'
import {style, merge, hover} from 'glamor'
import {blue, gray} from '../constants/colors'

export default ({href, children, fat=false}) => (
  <a 
    href={href}
    {...merge(
      {
        color: blue,
        fontWeight: 'bold',
        textDecoration: 'none',
        boxShadow:  `0 1px 0 ${gray}`,
        transition: 'box-shadow .3s cubic-bezier(0.19, 1, 0.22, 1)'
      },
      hover({
        boxShadow:  `0 ${fat?6:3}px 0 ${blue}`,
      })
    )}
  >
    {children}
  </a>
) 

