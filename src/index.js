import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'
import Root from './components/Root'
import Body from './components/Body'
import { renderStatic } from 'glamor/server'


const renderBody = locals =>  
  renderToStaticMarkup(<Body {...locals} />)

const renderPage = (html, css, locals) => 
  renderToStaticMarkup(<Root {...locals} css={css} body={html} />)

const render = (locals, callback) => {
  const { html, css } = renderStatic(() => renderBody(locals))
  callback(null, '<!DOCTYPE html>' + renderPage(html, css, locals))
}

export default render

