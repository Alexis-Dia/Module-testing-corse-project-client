import React, {Component} from 'react'
import {connect} from 'react-redux'
import './ReportsView.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  TIME_OF_ASKING_QUESTION_POP_UP,
  TIME_OF_WAITING_AFTER_ASKING,
  POP_UP_MESSAGE_TYPE_PRIMARY,
  MIN_NUMBERS_OF_CHARACTERS_IN_QUESTION,
  EMPTY_STRING, REGISTARATION_PAGE_PATH
} from '../../../../properties/properties'
import {WARNING_QUESTION_LESS_THEN} from '../../../../properties/warningMessages'
import {
  ADD_FLASH_MESSAGE,
  MESSAGE_YOU_ASKED_QUESTION_IN_SUCCESSFULY,
} from "../../../../api/flash/flashActions";
import {browserHistory} from "react-router";
import { EMPTY_PAGE_PATH } from '../../../../properties/properties';
import {GET_REPORTS} from "../../../../api/report/reportActions";
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

class ReportsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reports: [],
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

  componentDidMount() {
    this.props.getReports({
      data: {},
      credentials: {emailAddress: this.props.auth.user.emailAddress, password: this.props.auth.user.password}
    });
  }

  componentWillReceiveProps(nextprops) {
    console.log("nextprops.report = ", nextprops.report)
    if (nextprops.report && nextprops.report !== this.props.report) {
      this.setState({reports: nextprops.report});
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
    const {classes, auth} = this.props;

    return (
        <div style={{height: '650px', marginLeft: '200px', marginTop: '75px'}}>
          <MuiThemeProvider>
            {auth.isAuthenticated ?
                (
                    <Paper className={classes.root} style={{height: '700px'}}>
                      <Table style= {{overflowX: undefined, overflowY: undefined }}>
                        <TableHead>
                          <TableRow>
                            <TableCell onClick={() => {console.log("this.state = ", this.state)}}>Id</TableCell>
                            <TableCell numeric>Brand</TableCell>
                            <TableCell numeric>Capacity</TableCell>
                            <TableCell numeric>Year</TableCell>
                            <TableCell numeric>Number</TableCell>
                            <TableCell numeric>Data of receipt</TableCell>
                            <TableCell numeric>Status</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody style= {{overflowX: undefined, overflowY: undefined }}>
                          {this.state.reports && this.state.reports.map(report => {
                            return (
                                <TableRow key={report.id}>
                                  <TableCell component="th" scope="row">
                                    {report.id}
                                  </TableCell>
                                  <TableCell numeric>{report.brand}</TableCell>
                                  <TableCell numeric>{report.afds}</TableCell>
                                  <TableCell numeric>{report.year}</TableCell>
                                  <TableCell numeric>{report.number}</TableCell>
                                  <TableCell numeric>{report.dateOfReceipt}</TableCell>
                                  <TableCell numeric>{report.carStatus}</TableCell>
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
    report: state.report.list || [],
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getReports: (data) => dispatch({type: GET_REPORTS, data}),
    showFlashMessage: (data) => dispatch({type: ADD_FLASH_MESSAGE, data})
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ReportsView));
