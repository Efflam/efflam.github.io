
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Root from './components/Root'
import Body from './components/Body'
import { renderStatic } from 'glamor/server'

const render = (locals, callback) => {
  let { html, css, ids } = renderStatic(() =>
    ReactDOMServer.renderToStaticMarkup(<Body {...locals} />))
  console.log(css)
  const page = ReactDOMServer.renderToStaticMarkup(<Root {...locals} css={css} body={html} />)
  callback(null, '<!DOCTYPE html>' + page)
}

export default render

