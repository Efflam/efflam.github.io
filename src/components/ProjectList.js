import React from 'react'
import ProjectLink from './ProjectLink'
import {style} from 'glamor'

const ProjectList = ({
  projects
}) => {
  return (
    <div>
      {projects.map((project, i) => (
        <div
          key={i}
          {...style({
            marginBottom: '1.5rem'
          })}
        >
          <ProjectLink {...project} />
        </div>
      ))}
    </div>
  )
}

export default ProjectList

