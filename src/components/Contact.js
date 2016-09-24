import React from 'react'
import {style, merge, media} from 'glamor'
import breakpoints from '../constants/breakpoints'
import Link from './Link'
import Section from './Section'

export default ({mail}) => (
  <Section
    {...merge(
      {
        // paddingTop: '5rem',
        // paddingBottom: '5rem',
        fontWeight: 'bold',
        fontSize: '1.5rem'
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
  </Section>
)