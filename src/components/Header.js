import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-hand-rock-o"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>RAWL CORT GYM</h1>
        <p>
          <h2>2020/11/1~ released</h2><br />
          <h3>完全プライベートジムを自分だけの空間で</h3>
          <a>マンツーマン個別トレーニング(1h ¥5,500~)</a><br /><br />
          <a>プライベートジム使い放題(month ¥11,000~)</a><br /><br />
          <h3>周りを気にせずボディメイク</h3>
          ・<a>友人・家族とのトレーニング</a><br /><br />
          ・<a>パーソナル指導の場所として</a><br />
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('rcgym')
            }}
          >
            rc-gym
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            personal-training
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            private-rental
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
