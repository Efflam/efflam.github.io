import React from 'react'
import {style, merge, hover} from 'glamor'
import * as colors from '../constants/colors'
import Link from './Link'
import theme from '../theme'

export default ({href, name, description, tags}) => (
  <div href={href}>
    <h3
      {...style({
        fontSize: '1rem',
        // fontWeight: 'normal',
        margin: '0 0 0.25rem 0'
      })}
    >
      <Link href={href}>
        {name}
      </Link>
    </h3>
    <p
      {...style({
        margin: 0,
        // marginBottom: '0.5rem'
      })}
    >
      {description}
    </p>
    <p
      {...style({
        margin: 0,
        color: theme.secondary
      })}
    >
      {tags.map((tag, i)=> 
        <span
          {...merge(
            style({
              display: 'inline-block',
              borderRadius: '2px',
              // border: `1px solid ${colors.black10}`,
              // background: theme.secondary,
              color: theme.secondary,
              fontWeight: 'bold',
              // padding: '0 0.5rem',
              fontSize: '0.7rem',
              marginRight: '0.5rem',
              textTransform: 'uppercase',
              // cursor: 'pointer',
              transition: 'background .2s cubic-bezier(0.19, 1, 0.22, 1)'
            }),
            hover({
               // background: theme.accent,
            })
          )
        }
        >
          {tag}
        </span>)}
    </p>
  </div>
) 