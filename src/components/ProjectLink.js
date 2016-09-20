import React from 'react'
import {style} from 'glamor'
import {gray} from '../constants/colors'
import Link from './Link'

export default ({href, name, description, tags}) => (
  <div href={href}>
    <h3
      {...style({
        fontSize: '1rem',
        // fontWeight: 'normal',
        margin: '0 0 0.5rem 0'
      })}
    >
      <Link href={href}>
        {name}
      </Link>
    </h3>
    <p
      {...style({
        margin: 0
      })}
    >
      {description}
    </p>
    <p
      {...style({
        margin: 0,
        color: gray
      })}
    >
      {tags.map((tag, i)=> <span>#{tag} </span>)}
    </p>
  </div>
) 