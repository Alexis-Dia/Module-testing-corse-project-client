import React, {Component} from 'react'
import {connect} from 'react-redux'
import './AskQuestionView.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextFieldGroup from './textFieldGroup/TextFieldGroup';
import {
  TIME_OF_ASKING_QUESTION_POP_UP,
  TIME_OF_WAITING_AFTER_ASKING,
  POP_UP_MESSAGE_TYPE_PRIMARY,
  MIN_NUMBERS_OF_CHARACTERS_IN_QUESTION,
  EMPTY_STRING, REGISTARATION_PAGE_PATH
} from '../../../../properties/properties'
import {WARNING_QUESTION_LESS_THEN} from '../../../../properties/warningMessages'
import {Label} from 'reactstrap';
import {
  ADD_FLASH_MESSAGE,
  DELETE_BY_VALUE_FLASH_MESSAGES,
  MESSAGE_YOU_ASKED_QUESTION_IN_SUCCESSFULY,
} from "../../../../api/flash/flashActions";
import {browserHistory} from "react-router";
import FlatButton from 'material-ui/FlatButton';
import Reply from 'material-ui/svg-icons/content/reply'
import { EMPTY_PAGE_PATH } from '../../../../properties/properties';

class AskQuestionView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      flashMessages: null,
      auth: {isAuthenticated: false},
      headValue: EMPTY_STRING,
      headValueErrMeassage: EMPTY_STRING,
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.setState({auth: this.props.auth})
  }

  componentWillUnmount() {

  }

  shouldComponentUpdate() {
    return true;
  }

  componentWillUpdate() {

  }

  componentDidUpdate() {

  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.auth !== this.props.auth) {
      this.setState({auth: nextprops.auth})
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.headValue.length > MIN_NUMBERS_OF_CHARACTERS_IN_QUESTION) {
      this.setState({headValue: EMPTY_STRING});
      this.setState({headValueErrMeassage: EMPTY_STRING});
      this.props.askQuastion(
        {quastion: this.state.headValue}
      );
      this.props.showFlashMessage({type: POP_UP_MESSAGE_TYPE_PRIMARY, text: MESSAGE_YOU_ASKED_QUESTION_IN_SUCCESSFULY})
      window.setTimeout(() => {
        this.props.deleteByValueFlashMessages(MESSAGE_YOU_ASKED_QUESTION_IN_SUCCESSFULY);
      }, TIME_OF_ASKING_QUESTION_POP_UP)
      window.setTimeout(() => {
        const path = EMPTY_PAGE_PATH;
        browserHistory.push(path);
      }, TIME_OF_WAITING_AFTER_ASKING)
    } else {
      this.setState({headValueErrMeassage: WARNING_QUESTION_LESS_THEN});
    }
  };

  onChange = (e) => {
    this.setState({headValue: e.target.value});
  };

  returnToMainPage = (e) => {
    const path = EMPTY_PAGE_PATH;
    browserHistory.push(path);
  };

  render = () => {

    return (
      <div style={{height: '650px'}}>
        <MuiThemeProvider>
          <FlatButton

            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
            icon={<Reply color={'#ffffff'} style={{marginBottom: '10px'}}/>}
            style={{marginLeft: '1%', marginTop: '3%', maxWidth: '60px', maxHeight: '25px', minWidth: '60px', minHeight: '25px'}}
            onClick={this.returnToMainPage}
          />
          <div className='ask-form'>
            <form onSubmit={this.onSubmit}>
              <Label for="exampleEmail"><h4>Ask your quastion...</h4></Label>
              <TextFieldGroup
                field="identifier"
                value={this.state.headValue}
                onChange={this.onChange}
                frontendError={this.state.headValueErrMeassage}
              />
              <div className='button1'>
                <button disabled={!this.state.auth.isAuthenticated} className="btn btn-primary btn-sm">Ask your
                  quastion
                </button>
              </div>
            </form>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth || {},
    flashMessages: state.flashMessages || {}
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showFlashMessage: (data) => dispatch({type: ADD_FLASH_MESSAGE, data}),
    deleteByValueFlashMessages: (data) => dispatch({type: DELETE_BY_VALUE_FLASH_MESSAGES, data}),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AskQuestionView);
