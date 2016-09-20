import React from 'react'
import {style, merge, after, media} from 'glamor'
import breakpoints from '../constants/breakpoints'
import Link from './Link'

const NavItem = ({href, title}) => <Link href={href}>{title}</Link>

export default ({nav}) => (
  <nav>
    {nav.map((item, i) =>
      <div
        key={i}
        {...merge(
          { 
            display: 'block',
            marginBottom: '0.5rem'
          },
          media(breakpoints.tablet, {
            display: 'inline-block',
            marginRight: '2rem'
          })
        )}
      >
        <NavItem  {...item} />
      </div>
    )}
  </nav>
)