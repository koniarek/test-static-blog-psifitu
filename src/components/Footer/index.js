import React from 'react'
import Socials from '../Socials'

const Footer = ({ config }) => {
  return (
    <footer className='bg-black-60 pa5-l'>
      <div className='dt dt--fixed w-100'>
        <div className='dn dtc-ns v-mid'>
          <p className='f7 white dib pr3 mb3'>
            {config.copyright} Designed by <a className='link light-green hover-light-red' href='https://www.skwebarchitecture.com' target='_blank' rel='noreferrer nofollow noopener'>Szymon Koniarek</a>
          </p>
        </div>
        <Socials />
      </div>
      <div className='db dn-ns'>
        <p className='f7 white mt4 tc'>
          {config.copyright} Designed by <a className='link light-green hover-light-red' href='https://www.skwebarchitecture.com' target='_blank' rel='noreferrer nofollow noopener'>Szymon Koniarek</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
