import React from 'react'

export default ({title, body, css}) => (
  <html>
    <head>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <style dangerouslySetInnerHTML={{ __html: css }} />
    </head>
    <body dangerouslySetInnerHTML={{ __html: body }} />
  </html>
)
