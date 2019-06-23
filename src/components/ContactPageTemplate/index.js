import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ContactForm from '../ContactForm'

const ContactPageTemplate = ({ title, subtitle }) => <Fragment>
  <section className='mw7 center avenir'>
    <div className='mt3'>
      <div className='pa3 measure center bb'>
        <h1 className='f2 white lh-title fw4 mb3 mt0 pt3 bw2 avenir'>{title}</h1>
        <h2 className='f3 white lh-title avenir fw2'>{subtitle}</h2>
      </div>
      <ContactForm />
    </div>
  </section>
</Fragment>

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default ContactPageTemplate
