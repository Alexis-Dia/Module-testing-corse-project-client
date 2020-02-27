import React, { Component } from 'react'
import './MenuView.scss'
import { Link } from 'react-router'

class MenuApp extends Component {
  render = () => {
    return (
      <div>
          <div className='header-menu'>
              <div></div>
              <div></div>
              <div className='style0-menu'>
                <div className='style2-menu'><span className='style3-menu'>Map</span></div>
                <div className='style2-menu'><Link to="/tracks"><span className='style3-menu'>Tracks</span></Link></div>
                <div className='style2-menu'><Link to="/about"><span className='style3-menu'>About</span></Link></div>
              </div>
          </div>
      </div>
    );
  }
}

export default MenuApp
