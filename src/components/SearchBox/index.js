import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Index } from 'elasticlunr'

export default class SearchBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
      isActive: false,
    }
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true }) // Accept partial matches
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
      isActive: !!query,
    })
  }

  render () {
    return (
      <div className='measure center pa3 bg-black-60'>
        <fieldset className='cf bn ma0 pa0'>
          <div className='cf'>
            <small id='name-desc' className='f6 white db mb2 tr' style={{ cursor: 'pointer' }}
              onClick={() => window.history.back()}>Zamknij
            </small>
            <label className='clip' htmlFor='search'>Szukaj</label>
            <input
              className='f4 f5-l input-reset ba b--black-20 fl black-80 bg-white pa3 lh-solid w-100 br2-ns br--left-ns'
              placeholder='Szukaj...'
              type='text'
              name='search'
              onChange={this.search}
              value={this.state.query}
              id='search' />
          </div>
        </fieldset>
        {(this.state.isActive && this.state.results.length)
          ? this.state.results
            .filter(page => page.templateKey === 'article-page')
            .map(page => (
              <article key={page.slug} className='pv4 bb ph3 ph0-l'>
                <Link className='db ph0-l no-underline black-60 dim' key={page.id} to={page.slug} replace>
                  <h1 className='f3 fw1 baskerville mt0 lh-title'>{page.title}</h1>
                </Link>
              </article>
            ))
          : <div className='bg-black-40'>
            <p className='fw1 i tc mt4 mt5-l f4 f3-l white'>Czy szukasz jednej z poniższych sekcji?</p>
            <ul className='list tc pl0 w-100 mt5'>
              <li className='dib'><Link className='f5 f4-ns link white db pv2 ph3 hover-light-red' to='/'
                replace>Blog</Link>
              </li>
              <li className='dib'><Link className='f5 f4-ns link white db pv2 ph3 hover-light-red'
                to='/about' replace>O Mnie</Link>
              </li>
              <li className='dib'><Link className='f5 f4-ns link white db pv2 ph3 hover-light-red'
                to='/contact' replace>Kontakt</Link>
              </li>
              <li className='dib'><Link className='f5 f4-ns link white db pv2 ph3 hover-light-red'
                to='/tags' replace>Tagi</Link>
              </li>
            </ul>
          </div>
        }
      </div>
    )
  }
}
