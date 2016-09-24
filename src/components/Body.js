import React from 'react'
import {style, insertRule} from 'glamor'
import Header from './Header'
import About from './About'
import Nav from './Nav'
import Work from './Work'
import Awards from './Awards'
import Contact from './Contact'
import Footer from './Footer'
import * as colors  from '../constants/colors'
import * as gradients  from '../constants/gradients'
import theme from '../theme'

insertRule('html, body { padding: 0; margin: 0; line-height: 1.5; }')
insertRule(`::selection { background: ${theme.accent}; color:${colors.white};}`)


insertRule(`body { 
  background: ${theme.background};
  color: ${theme.color};
  background-repeat: no-repeat;
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
}`)

export default (props) => (
  <div
    {...style({
      paddingLeft: '1rem',
      paddingRight: '1rem',
      // paddingTop: '2rem',
      // paddingBottom: '2rem',
      maxWidth: '80rem',
      margin: 'auto',
      // fontFamily: 'Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,sans'
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
