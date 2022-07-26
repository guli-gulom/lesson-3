import React from 'react'
import BannerImg from "../image/banner.png"
import Mobile from "../image/mobile.png"
import Icon from "../image/icon.png"

const Main = () =>{
  return (
    <div className='container'>
  <div className="wrapper">
  <div className="banner">
        <img src={BannerImg} alt="banner" />
    </div>
    <div className="bannerDesc">
        <h1>Make wealth <br /> your own .</h1>
        <p>Personalized, Automated, Effortless <br />Investing and Savings.</p>
        <button>Get started</button>
    </div>
  </div>
  <div className="grid-container">
    <div className="card1">
        <h3>nerdwallet</h3>
        <p>Best Robo-advisor, 2019 <br />Best Cash Management App, 2020</p>
    </div>
    <div className="card">
        <h3>investopedia</h3>
        <p>Best Robo-advisor, 2020  <sup>1</sup></p>
    </div>
    <div className="card">
        <h3>450K+</h3>
        <p>Trusted clients</p>
    </div>
    <div className="card">
        <h3>$26B+
        </h3>
        <p>In client funds</p>
    </div>
    <div className="card">
        <h3>4.9 <i className="fas fa-star"></i>
        </h3>
        <p>In client funds</p>
    </div>
    <div className="card">
        <h3>4.5 <i className="fas fa-star"></i>
        </h3>
        <p>Apple App Store <sup>2</sup></p>
    </div>
  </div>
  <div className="flex-container">
    <div className="card1">
        <h1>Investing isn’t easy. We just make it feel that way.</h1>
        <p>Let us customize a portfolio just for you or build it yourself, and our powerful automation will make the most of your investments, optimizing your performance and helping lower your taxes.</p>
        <div className="btn-group">
            <button>Start investing</button>
            <button>Learn more</button>
        </div>
    </div>
    <div className="card">
        <img src={Mobile} alt="" />
    </div>
    <div className="card">
        <img src={Icon} alt="icon" />
        <h3>WEALTHFRONT</h3><span>now</span>
        <p>We saved you $78.11 on your taxes.</p>
    </div>
  </div>
    </div>
  )
}

export default  Main;