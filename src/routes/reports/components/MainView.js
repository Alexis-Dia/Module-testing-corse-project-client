import React, { Component } from 'react'
import AskQuestionView from './AskQuestionView/AskQuestionView'
import FooterView from '../../Home/components/FooterView/FooterView'
import './MainView.scss'

export default class MainView extends Component {

  render = () => {
    return (
      <div>
        <div className='main-header'>
          <AskQuestionView />
          <FooterView />
        </div>
      </div>
    )
  }

}
