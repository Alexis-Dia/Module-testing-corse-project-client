import React, {Component} from 'react'
import {connect} from 'react-redux'
import './DriversView.scss'
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from '@material-ui/core/styles';
import {GET_DRIVERS, LOGIN} from "../../../../api/login/loginActions";
import {ADD_FLASH_MESSAGE} from "../../../../api/flash/flashActions";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '10px',
  },
});

class DriversView extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {
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

  componentDidMount() {
    this.props.getDrivers({
      data: {},
      credentials: {emailAddress: this.props.auth.user.emailAddress, password: this.props.auth.user.password}
    });
    console.log("getDrivers = ")
  }

  componentWillReceiveProps(nextprops) {
  }

  render = () => {
    const {classes, auth} = this.props;
    console.log("this.props = ", this.props)

    return (
      <div style={{height: '650px', marginLeft: '200px'}}>
        <MuiThemeProvider>
          {auth.isAuthenticated ?
              (
                  <div>Empty</div>
              )
                  :
              (
                  <div></div>
              )
          }

        </MuiThemeProvider>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth || {},
    drivers: state.auth.drivers || [],
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDrivers: (data) => dispatch({type: GET_DRIVERS, data}),
    showFlashMessage: (data) => dispatch({type: ADD_FLASH_MESSAGE, data})
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(DriversView));
