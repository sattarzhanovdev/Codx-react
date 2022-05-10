import React from 'react'
import logo from '../images/logo.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <ul className="listFoot">
        <img src={logo} alt="" />
        <h4>
          Join the community
        </h4>
        <div className="socialIcons">
          <li>
            <a href="">
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className='fab fa-instagram'></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className='fab fa-facebook'></i>
            </a>
          </li>
        </div>
      </ul>
      <ul className="listFoot">
        <h4>
          Site
        </h4>
        <li>
          <a href="">
            About us
          </a>
        </li>
        <li>
          <a href="">
            NFTs
          </a>
        </li>
        <li>
          <a href="">
            Contact
          </a>
        </li>
      </ul>
      <ul className="listFoot">
        <h4>Utility</h4>
        <li>
          <a href="">
            Style guide
          </a>
        </li>
        <li>
          <a href="">
            Lincensing
          </a>
        </li>
        <li>
          <a href="">
            404
          </a>
        </li>
      </ul>
      <ul className="listFoot">
        <h1>
          Stay in the loop
        </h1>
        <p>
          Suspendisse sem neque, auctor a elementum ut, <br />
          varius vel leo. Donec diam arcu, porta et magna at
        </p>
        <form className='form'>
          <input type="email" placeholder='Your email address' />
          <button>Sign up</button>
        </form>
      </ul>
    </div>
  )
}

export default Footer