import React from 'react'
import {style, merge, media} from 'glamor'
import breakpoints from '../constants/breakpoints'
import Link from './Link'
import Section from './Section'

const Br = () => (
  <br
    {...merge(
      { display: 'none' },
      media(breakpoints.tablet, {
        display: 'block'
      })
    )}
  />
)

export default ({byline, location}) => (
  <Section>
    <p
      {...merge(
        {
          margin: 0,
          marginBottom: '2rem',
          fontSize: '2rem',
          fontWeight: 'bold'
        },
        media(breakpoints.tablet, {
          fontSize: '2.5rem',
        })
      )}
    >
      Developer specializing <Br/>
      in real-time graphics rendering <Br/>
      & modular architecture <Br/>
      for the web platform.
    </p>
    <p
      {...style({
        margin: 0
      })}
    >
      Currently Lead Creative Developer at <Link href="http://nu.run">Nurun</Link>.<br/>
      Based in {location}.
    </p>
  </Section>
)