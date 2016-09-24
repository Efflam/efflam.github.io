import React from 'react'
import {style, merge, media} from 'glamor'
import breakpoints from '../constants/breakpoints'
import * as colors from '../constants/colors'

const paddingXs = '2rem'
const paddingM = '4rem'

export default ({children, ...props}) => (
  <section
    {...merge(
      style({
        paddingTop: paddingXs,
        paddingBottom: paddingXs,
        // borderBottom: `1px solid ${colors.black20}`
      }),
      media(breakpoints.tablet, {
        paddingTop: paddingM,
        paddingBottom: paddingM
      })
    )}
    {...props}
  >
    {children}
  </section>
) 