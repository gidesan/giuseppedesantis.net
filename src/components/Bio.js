import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Giuseppe de Santis`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          I'm <strong>Giuseppe de Santis</strong> and I waited for 35 years before starting a blog.{' '}
          And before <a href="https://twitter.com/gidesan">tweeting</a> as well.
        </p>
      </div>
    )
  }
}

export default Bio
