import React from 'react'
import ProjectLink from './ProjectLink'
import {style} from 'glamor'

export default ({
  projects
}) => {
  return (
    <div>
      {projects.map((project, i, items) => (
        <div
          key={i}
          style={{
            marginBottom: i < projects.length -1 ? '1.5rem' : 0
          }}
        >
          <ProjectLink {...project} />
        </div>
      ))}
    </div>
  )
}
