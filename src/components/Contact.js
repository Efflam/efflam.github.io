import React from 'react'
import {style, merge, media} from 'glamor'
import breakpoints from '../constants/breakpoints'
import Link from './Link'

export default ({mail}) => (
  <section
    {...merge(
      {
        paddingTop: '5rem',
        paddingBottom: '5rem',
        fontWeight: 'bold',
        fontSize: '2rem'
      },
      media(breakpoints.tablet, {
        fontSize: '2.5rem',
      })
    )}
  >
    <p {...style({margin: 0})}>
      For work inquiries<br/>
      please email:
    </p>
    <Link href={`mailto:${mail}`} fat>{mail}</Link>
  </section>
)