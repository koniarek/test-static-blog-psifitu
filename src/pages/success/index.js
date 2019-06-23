import React from 'react'
import { Link } from 'gatsby'
import 'tachyons-sass/tachyons.scss'

const SuccessPage = () => (
  <section className='vh-100 avenir'>
    <header className='tc ph5 lh-copy'>
      <h1 className='f1 f-headline-l code mb3 fw9 dib tracked-tight washed-red'>Sukces!</h1>
      <h2 className='tc f1-l fw1'>Twoja wiadomość została wysłana.</h2>
    </header>
    <p className='fw1 i tc mt4 mt5-l f4 f3-l'>Odpowiem tak szybko, jak to możliwe.</p>
    <ul className='list tc pl0 w-100 mt5'>
      <li className='dib'><Link className='f5 f4-ns link white db pv2 ph3 hover-washed-red' to='/' replace>Blog</Link></li>
      <li className='dib'><Link className='f5 f4-ns link white db pv2 ph3 hover-washed-red' to='/about' replace>O Mnie</Link></li>
      <li className='dib'><Link className='f5 f4-ns link white db pv2 ph3 hover-washed-red' to='/contact' replace>Kontakt</Link>
      </li>
      <li className='dib'><Link className='f5 f4-ns link white db pv2 ph3 hover-washed-red' to='/tags' replace>Tagi</Link></li>
    </ul>
  </section>
)

export default SuccessPage
