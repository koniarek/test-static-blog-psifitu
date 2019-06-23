import React from 'react'
import { Link } from 'gatsby'
import * as config from '../../../config'

const Header = () => (
  <header className='bg-black-60 tc pv4 avenir'>
    <h1 className='mt2 mb0 baskerville i fw1 f1 light-red'>{config.siteTitle }</h1>
    <h2 className='mt2 mb0 f6 fw4 ttu tracked white'>Paulina Skorupa - Trener Personalny</h2>
    <nav className='bt bb tc mw8 center mt4'>
      <Link className='f6 f5-l link bg-animate white hover-bg-light-red dib pa3 ph4-l' to='/'>Blog</Link>
      <Link className='f6 f5-l link bg-animate white hover-bg-light-red dib pa3 ph4-l' to='/about'>O Mnie</Link>
      <Link className='f6 f5-l link bg-animate white hover-bg-light-red pa3 ph4-l' to='/contact'>Kontakt</Link>
      <Link className='f6 f5-l link bg-animate white hover-bg-light-red dib pa3 ph4-l' to='/search'>Wyszukaj</Link>
    </nav>
  </header>
)

export default Header
