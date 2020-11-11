import PropTypes from 'prop-types'
import React from 'react'
import pic23 from '../images/pic23.png'

const Header = props => (
  
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span>
      <img src={pic23} alt="" class="logo" />
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1><font size="7">RAWL CORT GYM</font></h1>
          <h2>2020/11/1~ released</h2>
            <h3>完全プライベートジムを自分だけの空間に</h3><br />
              <h4>マンツーマン個別トレーニング(1h ¥5,500~)</h4>
              <h4><p>プライベートジム使い放題(month ¥11,000~)</p></h4>
            <h3>周りを気にせずボディメイク</h3>
              <h4>・友人・家族と一緒にトレーニング</h4>
              <h4>・パーソナル指導の場所として</h4>
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
