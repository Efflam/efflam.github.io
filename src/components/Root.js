import React from 'react'

class Root extends React.Component {
  render() {
    const { title, body } = this.props
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>{title}</title>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </head>
        <body dangerouslySetInnerHTML={{ __html: body }} />
      </html>
    )
  }
}

export default Root
