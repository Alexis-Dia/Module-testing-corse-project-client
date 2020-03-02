import React, {Component} from 'react'
import {connect} from 'react-redux'
import './CreateReportView.scss'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import {GET_MINE_TASK} from "../../../../api/task/taskActions";
import Button from "@material-ui/core/Button";

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

class CreateReportView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      auth: null,
      tasks: [],
      currentTask: null,
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
    this.props.getMineTasks({
      data: {},
      credentials: {emailAddress: this.props.auth.user.emailAddress, password: this.props.auth.user.password}
    });
    this.props.task && this.props.task.map(task => {if (task.taskStatus === 'IN_PROGRESS') {this.setState({currentTask: task.id})}});
  }

  componentWillReceiveProps(nextprops) {
    console.log("nextprops1 = ", nextprops)
    if (nextprops.task && nextprops.task !== this.props.task) {
      this.setState({tasks: nextprops.task});
      console.log("nextprops2 = ", nextprops)
      nextprops.task.map(task => {if (task.taskStatus === 'IN_PROGRESS') {this.setState({currentTask: task.id})}});
    }
    if (nextprops.auth !== this.props.auth) {
      if (nextprops.auth && !nextprops.auth.isAuthenticated) {
        this.setState({currentTask: null});
      }
    }
  }

  render = () => {
    const {classes, auth} = this.props;


    return (
      <div style={{height: '650px', marginLeft: '200px'}}>
        <MuiThemeProvider>
          {auth.isAuthenticated && this.state.currentTask ?
              (
                  <div style={{width: '700px'}}>
                    <Grid container spacing={0}>
                      <Grid item xs={12}>
                        <div style={{textAlign: 'center'}}> <h4 onClick={() => console.log('this.state = ', this.state)}>Create daily report for current active task №{this.state.currentTask}</h4></div>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <div className={classes.paper}>Distance</div>
                      </Grid>
                      <Grid item xs={12} sm={9}>
                        <div className={classes.paper} style={{borderColor: '#43434'}}>
                          <TextField
                              type="number"
                              underlineStyle={{borderColor: '#1eb1da', color: '#1eb1da'}}
                              style={{width: '200px', marginTop: '-10px', marginLeft: '-300px'}}
                              //onChange={this.onChangeTextFieldPropertyFilter}
                              name='weight'
                              //value={this.state.username}
                          />
                        </div>
                      </Grid>

                      <Grid item xs={12} sm={3}>
                        <div className={classes.paper}>Departure</div>
                      </Grid>
                      <Grid item xs={12} sm={9}>
                        <React.Fragment className={classes.paper} style={{borderColor: '#43434'}}>
                          <TextField
                              id="datetime-local"
                              //label="To"
                              type="datetime-local"
                              defaultValue="2017-05-24T10:30"
                              className={classes.textField}
                              variant="outlined"
                              InputLabelProps={{
                                shrink: true,
                              }}
                          />
                        </React.Fragment>
                      </Grid>

                      <Grid item xs={12} sm={3}>
                        <div className={classes.paper}>Arrival</div>
                      </Grid>
                      <Grid item xs={12} sm={9}>
                        <React.Fragment className={classes.paper} style={{borderColor: '#43434'}}>
                          <TextField
                              id="datetime-local"
                              //label="To"
                              type="datetime-local"
                              defaultValue="2017-05-24T10:30"
                              className={classes.textField}
                              variant="outlined"
                              InputLabelProps={{
                                shrink: true,
                              }}
                          />
                        </React.Fragment>
                      </Grid>
                    </Grid>
                    <div style={{marginLeft: '175px', marginTop: '30px'}}>
                      <Button variant="contained" color="primary">
                        Add
                      </Button>
                    </div>

                  </div>
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
    task: state.task.list || [],
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getMineTasks: (data) => dispatch({type: GET_MINE_TASK, data}),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CreateReportView));
