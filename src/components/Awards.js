import React from 'react'
import SectionHeading from './SectionHeading'
import {style} from 'glamor'

const Award = ({name, from}) => (
  <div>
    {name} — {from}
  </div>
)

export default ({awards}) => (
  <section
    {...style({
      paddingTop: '5rem',
      paddingBottom: '1rem'
    })}
  >
    <SectionHeading>Awards</SectionHeading>
    { awards.map((award, i) =>
      <div 
        key={i}
        {...style({
          marginBottom: '0.5rem'
        })}
      >
        <Award {...award}/>
      </div>
    )}
  </section>
)