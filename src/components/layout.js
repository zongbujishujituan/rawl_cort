import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title="RAWL CORT GYM"
            meta={[
              { name: 'keywords', content: 'RAWL CORT, RAWL CORT GYM, RCGYM, 越谷, 川口, 草加, 春日部,パーソナルトレーニング, パーソナルジム, レンタルジム, レンタルルーム, ' },
              
              { name: 'descriptio', content: 'RAWL CORT GYM 公式HP'}
            ]}
          >
          
            <html lang="ja" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
