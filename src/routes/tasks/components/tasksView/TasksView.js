import React, {Component} from 'react'
import {connect} from 'react-redux'
import './TasksView.scss'
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {ADD_FLASH_MESSAGE} from "../../../../api/flash/flashActions";
import {GET_MINE_TASK, GET_TASKS} from "../../../../api/task/taskActions";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

class TasksView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      auth: null,
      tasks: [],
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
    console.log("ADSASD PROPS", this.props.auth)
    if (this.props.auth.user.userRole === 'USER') {
      console.log("ADSASD USER")
      this.props.getMineTasks({
        data: {},
        credentials: {emailAddress: this.props.auth.user.emailAddress, password: this.props.auth.user.password}
      });
    } else if(this.props.auth.user.userRole === 'ADMIN') {
      console.log("ADSASD ADMIN")
      this.props.getTasks({
        data: {},
        credentials: {emailAddress: this.props.auth.user.emailAddress, password: this.props.auth.user.password}
      });
    }
  }

  componentWillReceiveProps(nextprops) {
    console.log("IIIIIIII nextprops", nextprops.auth)
    if (nextprops.auth !== this.props.auth) {
      console.log("IIIIIIII2 nextprops", nextprops.auth)
      if (nextprops.auth.isAuthenticated) {
        console.log("IIIIIIII3 nextprops", nextprops.auth)
        if (nextprops.auth.user.userRole === 'USER') {
          console.log("IIIIIIII4 nextprops", nextprops.auth)
          this.props.getMineTasks({
            data: {},
            credentials: {emailAddress: nextprops.auth.user.emailAddress, password: nextprops.auth.user.password}
          });
        } else if(nextprops.auth.user.userRole === 'ADMIN') {
          console.log("IIIIIIII5 nextprops", nextprops.auth)
          this.props.getTasks({
            data: {},
            credentials: {emailAddress: nextprops.auth.user.emailAddress, password: nextprops.auth.user.password}
          });
        }
      }
      this.setState({auth: nextprops.auth});
    }
    if (nextprops.task && nextprops.task !== this.props.task) {
      this.setState({tasks: nextprops.task});
    }
  }

  render = () => {
    const {classes, auth} = this.props;

    return (
        <div style={{height: '650px', marginLeft: '200px', marginTop: '75px'}}>
        <MuiThemeProvider>
          {auth.isAuthenticated ?
              (
                  <Paper className={classes.root}>
                    <Table className={classes.table}>
                      <TableHead>
                        <TableRow>
                          <TableCell>Id</TableCell>
                          <TableCell numeric>Summary distance</TableCell>
                          <TableCell numeric>Weight</TableCell>
                          <TableCell numeric>Driver</TableCell>
                          <TableCell numeric>Car</TableCell>
                          <TableCell numeric>Task status</TableCell>
                          <TableCell numeric>Name</TableCell>
                          <TableCell numeric>Number of reports</TableCell>
                          <TableCell numeric>Reward</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {this.state.tasks && this.state.tasks.map(task => {
                          return (
                              <TableRow key={task.id}>
                                <TableCell component="th" scope="row">
                                  {task.id}
                                </TableCell>
                                <TableCell numeric>{task.summaryDistance}</TableCell>
                                <TableCell numeric>{task.weight}</TableCell>
                                {task.taskStatus !== 'FREE' ? (<TableCell numeric>{task.driver.lastName + ' ' + task.driver.firstName + ', ID is ' + task.driver.userID}</TableCell>) : (<TableCell numeric></TableCell>)}
                                <TableCell numeric>{task.car.number}</TableCell>
                                <TableCell numeric>{task.taskStatus}</TableCell>
                                <TableCell numeric>{task.name}</TableCell>
                                {task.taskStatus !== 'FREE' ? (<TableCell numeric>{task.reports.length}</TableCell>) : (<TableCell numeric></TableCell>)}
                                <TableCell numeric>{task.reward}</TableCell>
                              </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </Paper>
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
    flashMessages: state.flashMessages || {},
    task: state.task.list || [],
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTasks: (data) => dispatch({type: GET_TASKS, data}),
    getMineTasks: (data) => dispatch({type: GET_MINE_TASK, data}),
    showFlashMessage: (data) => dispatch({type: ADD_FLASH_MESSAGE, data})
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TasksView));
