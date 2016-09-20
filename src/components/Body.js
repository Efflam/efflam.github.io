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

class Body extends React.Component {
  render() {
    const { scripts } = this.props
    return (
      <div
        {...style({
          paddingLeft: '1rem',
          paddingRight: '1rem',
          maxWidth: '80rem',
          margin: 'auto',
          fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
          // fontFamily: 'Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,sans',
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column'
        })}
      >
        <Header {...this.props}/>
        <main
          {...style({
            flex: 1
          })}
        >
          <About {...this.props}/>
          
          <Work {...this.props}/>
          <Awards {...this.props}/>
          <Contact {...this.props}/>
          <Nav {...this.props}/>
        </main>
        <Footer {...this.props}/>
      </div>
    )
  }
}

export default Body
