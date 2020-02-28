import React, {Component} from 'react'
import {connect} from 'react-redux'
import './CreateTaskView.scss'
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from '@material-ui/core/styles';

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

class CreateTaskView extends Component {

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
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CreateTaskView));
