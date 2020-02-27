import React, {Component} from 'react'
import {connect} from 'react-redux';
import {browserHistory} from 'react-router'

import SignUpForm from './signUp/SignUpForm'
import LogInForm from './logIn/LoginForm'
import { Modal, ModalBody } from 'reactstrap';
import {
    EN,
    RU,
    I18,
    LANGUAGE_DEFAULT,
    TASKS_PAGE_PATH,
    TASKS,
    ROLE_DRIVER,
    ROLE_ADMIN
} from '../../../properties/properties'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Language from 'material-ui/svg-icons/action/language';
import ActionPowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './NavigationBarLayout.scss'
import {
  REGISTARATION_PAGE_PATH,
  EMPTY_PAGE_PATH,
  REPORTS_PAGE_PATH,
  ADD_REPORT_PAGE_PATH,
  INFORMATION,
  REPORTS,
  ADD_REPORT,
} from '../../../properties/properties';
import { DELETE_ALL_FLASH_MESSAGES } from '../../../api/flash/flashActions';
import { DELETE_CURRENT_USER } from '../../../api/login/loginActions'

class NavigationBarLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalSignUp: false,
      modalLogIn: false,
      modalDrawer: false,
      language: LANGUAGE_DEFAULT,
      currentPage: INFORMATION,
    };
  }

  toggleSignUp = () => {
    window.location = REGISTARATION_PAGE_PATH
  };

  toggleLogIn = () => {
    this.setState({
      modalLogIn: !this.state.modalLogIn
    });
  };

  toggleDrawer = () => {
    this.setState({
      modalDrawer: !this.state.modalDrawer
    });
  };

  onClickTopQuestion = () => {
    const path = EMPTY_PAGE_PATH;
    browserHistory.push(path);
    this.toggleDrawer()
    this.setState({
      currentPage: INFORMATION,
    });
  };

  onClickAllTasks = () => {
    const path = TASKS_PAGE_PATH;
    browserHistory.push(path);
    this.toggleDrawer()
    this.setState({
      currentPage: TASKS,
    });
  };

  onClickAskQuestion = () => {
    const path = REPORTS_PAGE_PATH;
    browserHistory.push(path);
    this.toggleDrawer()
    this.setState({
      currentPage: REPORTS,
    });
  };

  onClickMyQuestions = () => {
    const path = ADD_REPORT_PAGE_PATH;
    browserHistory.push(path);
    this.toggleDrawer()
    this.setState({
      currentPage: ADD_REPORT,
    });
  };

  setLanguage = (event, child) => {
    localStorage.removeItem(I18);
    localStorage.setItem(I18, event.target.innerText);
    this.props.setLang(event.target.innerText);

    this.setState({
      language: event.target.innerText
    });
  };

  logout = () => {
    this.props.logout();
    this.props.deleteAllFlashMessages();
  };


  render = () => {

    const {isAuthenticated} = this.props.auth;
    let userIsDriver = false;
    let userIsAdmin = false;
    if (isAuthenticated) {
        let userRole = this.props.auth.user.userRole;
        if (userRole === ROLE_DRIVER) {
            userIsDriver = true;
        } else if (userRole === ROLE_ADMIN) {
            userIsAdmin = true;
        }
    }

    const userAppBar = (
      <div>
        <MuiThemeProvider>

          <AppBar
            /*title={<img src={require('./img/navigationBarLayout/OrangeryLogo.png')}/>}
            titleStyle={{color: '#000000', fontSize: '18px'}}*/
            title='Carriages-system'
            style={{backgroundColor: '#ffffff', zIndex: 990}}
            titleStyle={{color: '#02162c'}}
            iconElementLeft={
              <IconButton iconStyle={{fill: '#000000'}}>
                <NavigationMenu/>
              </IconButton>
            }
            onLeftIconButtonClick={this.toggleDrawer}
            children={

              <Toolbar style={{backgroundColor: '#ffffff'}}>
                <ToolbarGroup>
                  <Badge
                    badgeContent={1}
                    primary={true}
                    badgeStyle={{top: 12, right: 12}}
                  >
                    <IconButton style={{marginTop: '-10px'}}>
                      <NotificationsIcon />
                    </IconButton>
                  </Badge>
                  <IconMenu
                    iconButtonElement={
                      <IconButton>
                        <Language/>
                      </IconButton>
                    }
                    onItemClick={this.setLanguage}
                    value={this.state.language}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    iconStyle={{fill: '#000000', marginTop: '2px'}}
                  >
                    <MenuItem
                      value={RU}
                      primaryText={RU}/>
                    <MenuItem
                      value={EN}
                      primaryText={EN}/>
                  </IconMenu>
                  <ToolbarSeparator/>
                  <IconButton iconStyle={{fill: '#000000'}} onClick={this.logout}>
                    <ActionPowerSettingsNew/>
                  </IconButton>
                </ToolbarGroup>
              </Toolbar>


            }
          >
          </AppBar>
        </MuiThemeProvider>
      </div>
    );

    const guestAppBar = (
      <MuiThemeProvider>
        <AppBar
          //title={<img src={require('./img/navigationBarLayout/OrangeryLogo.png')}/>}
          title='Carriages-system'
          style={{backgroundColor: '#ffffff', zIndex: 990}}
          titleStyle={{color: '#02162c'}}
          iconElementLeft={
            <IconButton iconStyle={{fill: '#000000'}}>
              <NavigationMenu/>
            </IconButton>
          }
          onLeftIconButtonClick={this.toggleDrawer}
          children={
            <Toolbar style={{backgroundColor: '#ffffff'}}>
              <ToolbarGroup>
                <IconMenu
                  iconButtonElement={
                    <IconButton>
                      <Language/>
                    </IconButton>
                  }
                  onItemClick={this.setLanguage}
                  value={this.state.language}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                  iconStyle={{fill: '#000000', marginTop: '2px'}}
                >
                  <MenuItem
                    value={RU}
                    primaryText={RU}/>
                  <MenuItem
                    value={EN}
                    primaryText={EN}/>
                </IconMenu>
                <ToolbarSeparator/>
                <IconMenu
                  iconButtonElement={
                    <IconButton>
                      <NavigationMenu/>
                    </IconButton>
                  }
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                  iconStyle={{fill: '#000000', marginTop: '2px'}}
                >
                  <MenuItem
                    primaryText="Sign Up"
                    onClick={this.toggleSignUp}/>
                  <MenuItem
                    primaryText="Log In"
                    onClick={this.toggleLogIn}/>
                </IconMenu>
              </ToolbarGroup>
            </Toolbar>
          }
        >
        </AppBar>
      </MuiThemeProvider>
    );

    return (
      <div>
        <div className='appbar-main-1'>
          {isAuthenticated ? userAppBar : guestAppBar}
          <div className='drower-main-1'>

            <Modal isOpen={this.state.modalSignUp} toggle={this.toggleSignUp} className={this.props.className}>
              <ModalBody>
                <SignUpForm toogle={this.toggleSignUp}/>
              </ModalBody>
            </Modal>

            <Modal isOpen={this.state.modalLogIn} toggle={this.toggleLogIn} className={this.props.className}>
              <ModalBody>
                <LogInForm toggleLogIn={this.toggleLogIn}/>
              </ModalBody>
            </Modal>

            <MuiThemeProvider>
              <Drawer open={this.state.modalDrawer}
                      docked={false}
                      onRequestChange={this.toggleDrawer}
                      overlayStyle={{zIndex: 0, opacity: 0.25}}
                      containerStyle={{
                        top: '1px',
                        zIndex: 99,
                        position: 'absolute',
                        backgroundColor: '#ffffff',
                        height: '1200px'
                      }}
              >
                <div className='drower-main-2'>
                  <nav
                    className="navbar navbar-light navbar-expand justify-content-center">
                    <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                      {isAuthenticated
                        ?
                          (userIsDriver ?
                                (
                                    <Menu style={{backgroundColor: '#FFFBF7', width: '100%'}}>

                                      {(this.state.currentPage === "Information")
                                          ?
                                          (
                                              <MenuItem primaryText="Information" onClick={this.onClickTopQuestion} style={{backgroundColor: '#FF8F4F'}}/>
                                          ) :
                                          (
                                              <MenuItem primaryText="Information" onClick={this.onClickTopQuestion} />
                                          )
                                      }

                                      {(this.state.currentPage === "Tasks")
                                          ?
                                          (
                                              <MenuItem primaryText="Tasks" onClick={this.onClickAllTasks} style={{backgroundColor: '#FF8F4F'}}/>
                                          ) :
                                          (
                                              <MenuItem primaryText="Tasks" onClick={this.onClickAllTasks} />
                                          )
                                      }

                                      {(this.state.currentPage === "Reports")
                                          ?
                                          (
                                              <MenuItem primaryText="Reports" onClick={this.onClickAskQuestion} style={{backgroundColor: '#FF8F4F'}}/>
                                          ) :
                                          (
                                              <MenuItem primaryText="Reports" onClick={this.onClickAskQuestion} />
                                          )
                                      }

                                      {(this.state.currentPage === "Add report")
                                          ?
                                          (
                                              <MenuItem primaryText="Add report" onClick={this.onClickMyQuestions} style={{backgroundColor: '#FF8F4F'}}/>
                                          ) :
                                          (
                                              <MenuItem primaryText="Add report" onClick={this.onClickMyQuestions} />
                                          )
                                      }

                                      {/*{(this.state.currentPage === "Find question")
                              ?
                              (
                                <MenuItem primaryText="Find question" onClick={this.onClickFindQuestion} style={{backgroundColor: '#FF8F4F'}}/>
                              ) :
                              (
                                <MenuItem primaryText="Find question" onClick={this.onClickFindQuestion} />
                              )
                            }*/}

                                    </Menu>
                                ) :
                                (
                                    <Menu style={{backgroundColor: '#FFFBF7', width: '100%'}}>

                                      {(this.state.currentPage === "Information")
                                          ?
                                          (
                                              <MenuItem primaryText="Information" onClick={this.onClickTopQuestion} style={{backgroundColor: '#FF8F4F'}}/>
                                          ) :
                                          (
                                              <MenuItem primaryText="Information" onClick={this.onClickTopQuestion} />
                                          )
                                      }

                                      {(this.state.currentPage === "Tasks")
                                          ?
                                          (
                                              <MenuItem primaryText="Tasks" onClick={this.onClickAllTasks} style={{backgroundColor: '#FF8F4F'}}/>
                                          ) :
                                          (
                                              <MenuItem primaryText="Tasks" onClick={this.onClickAllTasks} />
                                          )
                                      }

                                      {(this.state.currentPage === "Reports")
                                          ?
                                          (
                                              <MenuItem primaryText="Reports" onClick={this.onClickAskQuestion} style={{backgroundColor: '#FF8F4F'}}/>
                                          ) :
                                          (
                                              <MenuItem primaryText="Reports" onClick={this.onClickAskQuestion} />
                                          )
                                      }

                                      {/*{(this.state.currentPage === "Find question")
                              ?
                              (
                                <MenuItem primaryText="Find question" onClick={this.onClickFindQuestion} style={{backgroundColor: '#FF8F4F'}}/>
                              ) :
                              (
                                <MenuItem primaryText="Find question" onClick={this.onClickFindQuestion} />
                              )
                            }*/}

                                    </Menu>
                                )
                          )
                        :
                        (
                          <Menu style={{backgroundColor: '#FFFBF7', width: '100%'}}>

                            {(this.state.currentPage === "Information")
                              ?
                              (
                                <MenuItem primaryText="Information" onClick={this.onClickTopQuestion} style={{backgroundColor: '#FF8F4F'}}/>
                              ) :
                              (
                                <MenuItem primaryText="Information" onClick={this.onClickTopQuestion} />
                              )
                            }

                            {/*{(this.state.currentPage === "Find question")
                              ?
                              (
                                <MenuItem primaryText="Find question" onClick={this.onClickFindQuestion} style={{backgroundColor: '#FF8F4F'}}/>
                              ) :
                              (
                                <MenuItem primaryText="Find question" onClick={this.onClickFindQuestion} />
                              )
                            }*/}

                          </Menu>
                        )
                      }
                    </div>
                  </nav>
                </div>
              </Drawer>
            </MuiThemeProvider>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteAllFlashMessages: (data) => dispatch({type: DELETE_ALL_FLASH_MESSAGES, data}),
    logout: (data) => dispatch({type: DELETE_CURRENT_USER, data}),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBarLayout);

/* https://stackoverflow.com/questions/19733447/bootstrap-navbar-with-left-center-or-right-aligned-items/20362024#20362024
https://github.com/mui-org/material-ui/issues/5358 */

