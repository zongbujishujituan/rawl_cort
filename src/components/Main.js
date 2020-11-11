import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic07 from '../images/pic07.jpg'
import pic12 from '../images/pic12.jpg'
import pic14 from '../images/pic14.jpg'
import pic15 from '../images/pic15.1.jpg'
import pic16 from '../images/pic16.jpg'
import pic18 from '../images/pic18.jpg'
import pic19 from '../images/pic19.jpg'
import pic20 from '../images/pic20.jpg'
import pic21 from '../images/pic21.jpg'
import pic22 from '../images/pic22.jpg'

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
          className={`${this.props.article === 'rcgym' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">gym</h2>
          <h3>RAWL CORT GYM / ラウルコートジム通称RC GYM</h3>
          <span className="image main">
            <img src={pic15} alt="" />
          </span>
          <p>
           様々な方にボディーメイクを楽しんで頂きたい!<br />
           そんな気持ちから埼玉では珍しいレンタルスペース<strong>RC GYM</strong>がNew open!!<br />
           ・パーソナルトレーニング１〜３ヶ月コース<br />
           ・コンテスト出場コース/単発コース<br />
           ・ジムスペース月利用 １ヶ月 ¥11,000〜<br /><br />
           <figure class="gazo-box"></figure>
            <span className="image main">
              <img src={pic19} alt="" width="560" height=""/>
              <img src={pic20} alt="" width="560" height=""/><br /><br />
            </span>
           個人利用・フリーのトレーナーさんの指導場所利用も可能。<br />
           他にも様々なプランがございます。<br />
           お客様に最適なプランを提案いたしますので是非お気軽にご相談下さい。<br /><br />
           RC GYMオリジナルブランド<a href="https://rawlcort.fashionstore.jp/l">RAWL CORT</a>もECサイトにて販売しております。</p>  
          <p>
            
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
            <img src={pic18} alt="" width="" height=""/>
          </span> 
          <p>
          プロフィール</p>
          <p>ベタンコールト 光　日本とチリのハーフ</p>
          <p>私はトレーニングを始めるまで178cmと比較的高身長ながら、52kgしかない、
          かなりの痩せ型でした。</p>
          <p>洋服をかっこよく着こなしたい、そんな気持ちから
          ボディーメイクを始め、冬(バルクアップ期間)は80kg超。夏(減量期間)は60kg後半〜70kg
          といったように食事や運動を組み合わせ無理なく、体重・体型をコントロール
          できるようになりました。</p>
          <p>2020年に開催された身体の美しさを競うコンテスト<strong>SMMER STYLE AWARD 2020</strong>では
          <b>オーバーオールを含め二冠</b>を勝ち取ることができました。
          ただ痩せるだけではなくしっかりと筋肉を残しつつ
          女性は綺麗なくびれ、ヒップアップ。男性はたくましく。</p>
          <p>マンツーマンだからこそ皆様の要望に細かくお応えできます。
          男性・女性、体重を増やしたい方・ダイエットしたい方も...目的は問いません。
          是非私に、皆さんが輝くためのお手伝いをさせて下さい！</p>
          <p>一緒に一歩を踏み出しましょう！！</p>
          最新コンテスト出場結果<br />
          Summer Style Award 2020<br />
          Stylish Gyu Tall crass 1位<br />
          <p>Styilish Guy Overall 1位</p>
          <u>料金表は以下の通りです。</u>
          <span className="image main">
            <img src={pic21} alt="" width="" height=""/>
          </span>
          その他、お客様に合った最適なプランを
          <p>ご提案しますのでお気軽にご相談下さい。<p/>
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
          <h4>RC GYMではプライベート利用の月額会員様を順次募集しております。</h4>
          <span className="image main">
            <img src={pic07} alt="" />
          </span>
          <p>
            <h3>特徴</h3>
            <p>
              24時間利用可能・完全予約制<br />
              1日1時間・1ヶ月 ¥11,000<br />
              ご友人、ご家族も同伴可
            </p>
            <h3>このような方にオススメです。</h3>
            <p>
              ジムのごちゃごちゃした雰囲気が苦手。<br />
              待ち時間が勿体無いとお思いの方
              RC GYMは完全事前予約制のプライベート空間です。
              その為周りの目も気にせず気軽に、そして待ち時間もなく効率よく
              トレーニングができます！
            </p>
            <span className="image main">
              <img src={pic22} alt="" />
            </span>
            <h3>お忙しい方の時短トレーニングに最適です。</h3>
            <p>ご友人・ご家族とトレーニングしたい方
            お１人ではもちろん、
            友人・ご家族も同伴でご利用いただけます。<br />
            *追加料金はありませんが、会員様が必ず同伴してください。
            </p>
            <h3>パーソナルトレーニングと併用したい方</h3>
            <p>専属のパーソナルトレーナーがいつでもご対応いたします。
              単発¥5,500〜<br />
              中々成長が見られない。フォームを見て欲しい。種目を教えてほしい。など
              お好きな時にお気軽にご相談ください。
            </p>
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
