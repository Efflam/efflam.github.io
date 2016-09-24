import React from 'react'
import * as colors from '../constants/colors'
import breakpoints from '../constants/breakpoints'
import {style, merge, media} from 'glamor'

export default ({name}) => (
  <header
    {...merge(
      style({
        paddingTop: '4rem',
        paddingBottom: '1rem',
        color: colors.blue,
        fontSize: '1.3rem',
        fontWeight: 'bold',
      }),
      media(breakpoints.tablet, {
        paddingTop: '8rem',
        paddingBottom: '1rem',
      })
    )}
  >
    {name}
  </header>
) 