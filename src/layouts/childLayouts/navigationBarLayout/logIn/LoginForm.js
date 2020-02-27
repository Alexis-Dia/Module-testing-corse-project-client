import { connect } from 'react-redux';
import React, { Component } from 'react'
import {
  ADD_FLASH_MESSAGE,
  MESSAGE_LOG_IN_SUCCESSFULY,
} from '../../../../api/flash/flashActions'
import { LOGIN_GOLOS } from '../../../../api/login/loginActions'
import TextFieldGroup from '../signUp/textFieldGroup/TextFieldGroup';
import './LoginForm.scss';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: {user: {errors: ''}},
        };
    }

    componentWillMount () {
        this.setState({auth: {user: {errors: ''}}});
    }

    componentWillReceiveProps (nextprops) {
        if (nextprops.user !== this.props.user) {
            this.setState({auth: nextprops.user});
            if (nextprops.user.isAuthenticated) {
                this.props.showFlashMessage({ type: 'success',  text: MESSAGE_LOG_IN_SUCCESSFULY});
                this.props.toggleLogIn();
            }
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (true) {
            this.props.login(
                {
                    user:
                        {
                            username: this.state.identifier,
                            password: this.state.password
                        }
                }
            );
        }
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render = () => {
        const { identifier, password } = '';

        return (
            <div className="logInStyle-1">
                <form onSubmit={this.onSubmit} >
                    <h1>Login with Golos.io</h1>
                    { this.state.auth.user.errors !== '' && <div className="alert alert-danger">{this.state.auth.user.errors}</div>}
                    {/*{ this.props.user.user.errors !== '' && <div className="alert alert-danger">{this.props.user.errors}</div>}*/}
                    <TextFieldGroup
                        field="identifier"
                        label="Name"
                        value={identifier}
                        onChange={this.onChange}
                    />

                    <TextFieldGroup
                        field="password"
                        label="Private posting key"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                    />

                    <div className="form-group">
                        <button className="btn btn-primary btn-lg" disabled={this.props.user.isAuthenticated}>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.auth || {}
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (data) => dispatch({type: LOGIN_GOLOS, data}),
        showFlashMessage: (data) => dispatch({type: ADD_FLASH_MESSAGE, data})
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)
