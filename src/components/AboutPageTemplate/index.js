import React from 'react'
import PropTypes from 'prop-types'
import Content from '../Content'

const AboutPageTemplate = ({ title, content, image, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className='mw8 center white'>
      <article className='cf ph3 ph5-ns pv5'>
        <header className='fn fl-ns w-50-ns pr4-ns'>
          <h1 className='f2 lh-title fw4 mb3 mt0 pt3 bt bw2 avenir'>
            {title}
          </h1>
          <time className='f6 ttu tracked white'>Paulina Skorupa - Trener Personalny</time>
        </header>
        <div className='fn fl-ns w-50-ns'>
          <PageContent content={content} className='avenir lh-copy measure f4 mt0 fw1' />
        </div>
      </article>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
