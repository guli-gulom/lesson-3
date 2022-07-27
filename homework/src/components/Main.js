import React from 'react'
import BannerImg from "../image/banner.png"
import Mobile from "../image/mobile.png"
import Icon from "../image/icon.png"
import Visa from "../image/visa2.png"
import Onlinepay from "../image/onlinepay.png"
import Networth from "../image/networth.png"
import Windowflower from "../image/windowflower.png"
import Newyorktimes from "../image/Newyorktimes.png"


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
        <h3><i class="fab fa-neos"></i>nerdwallet</h3>
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
            <button className='btns1'>Start investing</button>
            <button className='btns2'>Learn more</button>
        </div>
    </div>
    <div className="card2">
        <img src={Mobile} alt="" />
    </div>
    <div className="card">
      <div className='title'>
     
        <h4>  <img src={Icon} alt="icon" />WEALTHFRONT</h4><span>now</span>
      </div>
        <p>We saved you $78.11 on <br /> your taxes.</p>
        <div className="position">  <div className='title'>
     
     <h5> WEALTHFRONT</h5><span>now</span>
   </div>
            <p>automatically invested <br />500$ deposit</p>
        </div>
    </div>
  </div>
  <div className="grid-container2">
    <div className="card1">
        <img src={Visa} alt="visa card" />
    </div>
    <div className="card2">
        <img src={Onlinepay} alt="mobile" />
    </div>
    <div className="card3">
        <h1>Everyday cash, designed to build long-term wealth.</h1>
        <p>Our Cash account, offered with Green Dot Bank, lets you automate your savings, so you can pay bills, withdraw from 19,000+ ATMs, and invest your extra cash in seconds to keep building your future.</p>
        <div className="btn-group">
            <button className='btns1'>Start saving</button>
            <button className='btns2'>Learn more</button>
        </div>
    </div>
  </div>
  <div className="grid-container3">
    <div className="card1">
        <h1>Saving and investing. All while you’re relaxing.</h1>
        <p>Tell us what you’re saving for, and we’ll automatically set aside extra cash to hit your goals. And since we connect with all your accounts, you only need one app to watch your wealth grow.</p>
    </div>
    <div className="card2">
        <img src={Networth} alt="networth" />
    </div>
  </div>
  <div className="grid-container4">
  <div className="for-position">
  <div className="card">
        <h5>TESTIMONIAL</h5>
        <h2><span>It's the single best</span> resource for both investing, managing retirement and seeing my entire financial picture.</h2>
        <h6>Joshua B</h6>
    </div>
    <div className="card">
        <h5>TESTIMONIAL</h5>
        <h2><span>Wealthfront</span> is the first thing in my life that actually motivated me to save money.</h2>
        <h6>Isidore</h6>
    </div>
    <div className="card">
        <h5>TESTIMONIAL</h5>
        <h2><span>It’s automatic,</span> and I’m lazy.</h2>
        <h6>Ryan</h6>
    </div>
  </div>
  </div>
  <div className="flex-container2">
    <div className="card">
        <img src={Windowflower} alt="" />
    </div>
    <div className="card">
    <h1>Over <span>450,000</span> people are already using Wealthfront to earn more and worry less</h1>
        <button>Get started</button>
    </div>
       
    
  </div>
  <h6 className='h5'>As featured in</h6>
  <div className="grid-container5">
  
    <div className="item">
        <h3 className='wsj'>WSJ</h3>
    </div>
    <div className="item">
        <h3 className='h3'>Bloomberg</h3>
    </div>
    <div className="item">
    <img src={Newyorktimes} alt="" />
    </div>
    <div className="item">
        <h3 className='reuters'><i class="fas fa-spinner"></i>REUTERS</h3>
    </div>
    <div className="item">
    <i class="fab fa-500px"></i> <h3>CNBC</h3>
    </div>
  </div>
    </div>
  )
}

export default  Main;