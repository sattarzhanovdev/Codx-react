import React from 'react'
import logo from '../images/logo.png'
import './Header.css'

function Header() {
  return (
    <div className='navBar'>
      <div className="leftNav">
        <ul className="logo">
          <img src={logo} alt="" />
        </ul>
        <ul className="list">
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
      </div>
      <div className="rightNav">
        <ul className="socialIcons">
          <li>
            <a href=""><i className='fab fa-twitter'></i></a>
          </li>
          <li>
            <a href=""><i className='fab fa-instagram'></i></a>
          </li>
          <li>
            <a href=""><i className='fab fa-facebook'></i></a>
          </li>
        </ul>
        <ul className="viewBtn">
          <button>View on OpenSea</button>
        </ul>
      </div>
      <div className="bar">
        <li>
          <i className='fa fa-bars'></i>
        </li>
      </div>
    </div>
  )
}

export default Header