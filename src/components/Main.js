import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic07 from '../images/pic07.jpg'
import pic11 from '../images/pic11.jpg'
import pic12 from '../images/pic12.jpg'
import pic14 from '../images/pic14.jpg'
import pic15 from '../images/pic15.1.jpg'
import pic16 from '../images/pic16.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">rc gym</h2>
          <h3>RAWL CORT GYM (ラウルコートジム)通称RC GYM</h3>
          <span className="image main">
            <img src={pic15} alt="" />
          </span>
          <p>
           様々な方にボディーメイクを楽しんで頂きたい!<br />
           そんな気持ちから埼玉では珍しいレンタルスペース<a>RC GYM</a>がNew open!!<br />
           ・パーソナルトレーニング１〜３ヶ月コース<br />
           ・コンテスト出場コース/単発コース<br />
           ・ジムスペース月利用 １ヶ月 ¥11,000〜<br /><br />
           個人利用・フリーのトレーナーさんの指導場所利用も可能。<br />
           他にも様々なプランがございます。<br />
           お客様に最適なプランを提案いたしますので是非お気軽にご相談下さい。<br />
           RC GYMオリジナルブランド<a href="#rawl_cort_url">RAWL CORT</a>もECサイトにて販売しております。</p>  
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Personal</h2>
          <h3>トレーナー紹介</h3>
          <span className="image main">
            <img src={pic14} alt="" />
            <img src={pic11} alt="" />
          </span>
          <p>
          プロフィール<br /><br />
          ベタンコールト 光　日本とチリのハーフ<br /><br />
          私はトレーニングを始めるまで178cmと比較的高身長ながら、52kgしかない、
          かなりの痩せ型でした。洋服をかっこよく着こなしたい、そんな気持ちから<br />
          ボディーメイクを始め、冬(バルクアップ期間)は80kg超。夏(減量期間)は60kg<br />後半〜70kg
          といったように食事や運動を上手に組み合わせ無理なく、体重・体型をコントロールできるようになり
          2020年に開催された身体の美しさを競うコンテスト<a>SMMER STYLE AWARD 2020</a>では
          <a>オーバーオールを含め二冠</a>を勝ち取ることができました。
          ただ痩せるだけではなくしっかりと筋肉を残しつつ
          女性は綺麗なくびれ、ヒップアップ。男性はたくましく。<br />
          マンツーマンだからこそ皆様の要望に細かくお応えできます。<br />
          男性・女性、体重を増やしたい方・ダイエットしたい方も...目的は問いません。
          是非私に、皆さんが輝くためのお手伝いをさせて下さい！<br />
          一緒に一歩を踏み出しましょう！！<br /><br />
          最新コンテスト出場結果<br />
          Summer Style Award 2020<br />
          Stylish Gyu Tall crass 1位<br />
          Styilish Guy Overall 1位<br />
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Private</h2>
          <h3>RC GYMではプライベート利用の月額会員様を順次募集しております。</h3>
          <span className="image main">
            <img src={pic07} alt="" />
          </span>
          <p>
            <h3>特徴</h3>
            24時間利用可能・完全予約制<br />
            1日1時間・1ヶ月 ¥11,000　ご友人、ご家族も同伴可<br /><br />
            <h3>このような方にオススメです。</h3>
            ・ジムのごちゃごちゃした雰囲気が苦手。待ち時間が勿体無いとお思いの方
            RC GYMは完全事前予約制のプライベート空間です。<br />
            その為周りの目も気にせず気軽に、そして待ち時間もなく効率よく<br />
            トレーニングできます！<br /><br />
            <h3>お忙しい方の時短トレーニングに最適です。</h3>
            ・ご友人・ご家族とトレーニングしたい方
            お１人ではもちろん、<br />
            友人・ご家族もご同伴でご利用いただけます。<br />
            *追加料金はありませんが会員様が必ずご同伴ください。<br /><br />
            ・パーソナルトレーニングと併用したい方<br />
            専属のパーソナルトレーナーがいつでもご対応いたします。
            単発¥5,500〜
            中々成長が見られない。フォームを見て欲しい。種目を教えてほしい。など
            お好きな時にお気軽にご相談ください。
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
