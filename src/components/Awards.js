import React from 'react'
import SectionHeading from './SectionHeading'
import {style} from 'glamor'
import Section from './Section'

const Award = ({name, from}) => (
  <div>
    {name} — {from}
  </div>
)

export default ({awards}) => (
  <Section>
    <SectionHeading>Awards</SectionHeading>
    { awards.map((award, i) =>
      <div 
        key={i}
        style={{
            marginBottom: i < awards.length -1 ? '0.5rem' : 0
          }}
      >
        <Award {...award}/>
      </div>
    )}
  </Section>
)