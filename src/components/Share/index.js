import React, { Component } from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'
import config from '../../../config'

class Share extends Component {
  render () {
    const { title, slug, excerpt } = this.props
    const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
    const url = config.siteUrl + realPrefix + slug

    return (
      <div className='pv4 ph3 ph5-ns tc'>
        <div className='dib mr3' style={{ cursor: 'pointer' }}>
          <TwitterShareButton url={url} title={title}>
            <span className='link grow gray dib h1 h2-ns w1 w2-ns br-100 pa2 bg-near-black ba white-10 hover-light-red'>
              <svg data-icon='twitter' viewBox='0 0 32 32' style={{ fill: 'currentcolor' }}>
                <title>twitter icon</title>
                <path
                  d='M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4' />
              </svg>
            </span>
          </TwitterShareButton>
        </div>
        <div className='dib mr3' style={{ cursor: 'pointer' }}>
          <FacebookShareButton url={url} quote={excerpt}>
            <span className='link grow gray dib h1 h2-ns w1 w2-ns br-100 pa2 bg-near-black ba white-10 hover-light-red'>
              <svg data-icon='facebook' viewBox='0 0 32 32' style={{ fill: 'currentcolor' }}>
                <title>facebook icon</title>
                <path
                  d='M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z' />
              </svg>
            </span>
          </FacebookShareButton>
        </div>
        <div className='dib mr3' style={{ cursor: 'pointer' }}>
          <WhatsappShareButton url={url} title={title}>
            <span className='link grow gray dib h1 h2-ns w1 w2-ns br-100 pa2 bg-near-black ba white-10 hover-light-red'>
              <svg data-icon='whatsapp' viewBox='0 0 24 24' style={{ fill: 'currentcolor' }}>
                <title>whatsapp icon</title>
                <path d='M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411' />
              </svg>
            </span>
          </WhatsappShareButton>
        </div>
        <div className='dib mr3' style={{ cursor: 'pointer' }}>
          <LinkedinShareButton url={url} title={title} description={excerpt}>
            <span className='link grow gray dib h1 h2-ns w1 w2-ns br-100 pa2 bg-near-black ba white-10 hover-light-red'>
              <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' style={{ fill: 'currentcolor' }}>
                <title>LinkedIn icon</title>
                <path
                  d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
              </svg>
            </span>
          </LinkedinShareButton>
        </div>
      </div>
    )
  }
}

export default Share
