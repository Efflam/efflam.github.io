import React from 'react'
import ProjectList from './ProjectList'
import SectionHeading from './SectionHeading'
import {style} from 'glamor'
import Section from './Section'

export default ({projects}) => (
  <Section>
    <SectionHeading>Featured work</SectionHeading>
    <ProjectList projects={projects}/>
  </Section>
) 