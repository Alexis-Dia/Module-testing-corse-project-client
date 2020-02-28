import React, { Component } from 'react'
import ReportsView from './reportsView/ReportsView'
import FooterView from '../../Home/components/FooterView/FooterView'
import './MainView.scss'

export default class MainView extends Component {

  render = () => {
    return (
      <div>
        <div className='main-header'>
          <ReportsView />
          <FooterView />
        </div>
      </div>
    )
  }

}
