import React from 'react'
import ProjectList from './ProjectList'
import SectionHeading from './SectionHeading'
import {style} from 'glamor'

export default ({projects}) => (
  <section
    {...style({
      paddingTop: '1rem',
      paddingBottom: '1rem'
    })}
  >
    <SectionHeading>Featured work</SectionHeading>
    <ProjectList projects={projects}/>
  </section>
) 