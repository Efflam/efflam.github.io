import React from 'react'
import {style, merge, media} from 'glamor'
import breakpoints from '../constants/breakpoints'
import Link from './Link'

const Br = () => (
  <br
    {...merge(
      { display: 'none' },
      media(breakpoints.desktop, {
        display: 'block'
      })
    )}
  />
)

export default ({byline, location}) => (
  <header
    {...style({
      marginBottom: '5rem'
    })}
  >
    <p
      {...merge(
        {
          fontSize: '1.5rem',
          fontWeight: 'bold'
        },
        media(breakpoints.tablet, {
          fontSize: '2.5rem',
          width: '60%'
        })
      )}
    >
      Developer specializing <Br/>in real-time graphics rendering <Br/>& modular architecture <Br/>on the web platform.
    </p>
    <p
      {...style({
        //fontSize: '2rem'
      })}
    >
      Currently Lead Creative Developer at <Link href="http://nu.run">Nurun</Link>.<br/>
      {location}
    </p>
  </header>
) 