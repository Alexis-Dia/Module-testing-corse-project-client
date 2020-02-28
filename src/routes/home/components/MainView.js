import React, { Component } from 'react'
import GridView from './myInformationView/InformationView'
import FooterView from './footerView/FooterView'
import './MainView.scss'

export default class MainView extends Component {

  render = () => {
    return (
      <div>
        <div className='main-header'>
          <GridView />
          <FooterView />
        </div>
      </div>
    )
  }

}
