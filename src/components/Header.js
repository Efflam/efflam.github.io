import React from 'react'
import * as colors from '../constants/colors'
import breakpoints from '../constants/breakpoints'
import {style, merge, media} from 'glamor'
import theme from '../theme'

export default ({name}) => (
  <header
    {...merge(
      style({
        paddingTop: '4rem',
        paddingBottom: '0rem',
        color: theme.accent,
        fontSize: '1.2rem',
        fontWeight: 'bold',
      }),
      media(breakpoints.tablet, {
        paddingTop: '8rem',
        fontSize: '1.5rem',
        paddingBottom: '0rem',
      })
    )}
  >
    {name}
  </header>
) 