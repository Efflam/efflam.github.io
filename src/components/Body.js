import React from 'react'
import {style, insertRule} from 'glamor'
import Header from './Header'
import About from './About'
import Nav from './Nav'
import Work from './Work'
import Awards from './Awards'
import Contact from './Contact'
import Footer from './Footer'

insertRule('html, body { padding: 0; margin: 0; line-height: 1.5; }')

export default (props) => (
  <div
    {...style({
      paddingLeft: '1rem',
      paddingRight: '1rem',
      maxWidth: '80rem',
      margin: 'auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column'
    })}
  >
    <Header {...props}/>
    <main {...style({  flex: 1 })}>
      <About {...props}/>
      <Work {...props}/>
      <Awards {...props}/>
      <Contact {...props}/>
      <Nav {...props}/>
    </main>
    <Footer {...props}/>
  </div>
)
