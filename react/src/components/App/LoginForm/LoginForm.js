import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './LoginForm.css';
import apiBaseUrl from '../../../ApplicationSettings';
import urls from '../../../ApiUrls';
import { PostData } from '../Services/PostData';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        if(this.state.username && this.state.password) {
            PostData('login', this.state).then((result) => {
            let responseJson = result;
            if(responseJson.userData) {
                sessionStorage.setItem('userData', JSON.stringify(responseJson));
                this.setState({redirectToReferrer: true});
            }});
        }
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
        if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
            return (<Redirect to={'/ScrumBoard/Backlog'}/>)
        }

        return (
            <div className="login-form">
                <div className="heading">
                    <h2>Login</h2>
                </div>

                <form method="POST" action={apiBaseUrl + urls.userManagementUrls.LoginUser}>
                    <input className="input-field" type="text"
                        placeholder="username"
                        name="username"
                        required="required" 
                        onChange={this.onChange}/>
                    <input className="input-field" type="password"
                        placeholder="password"
                        name="password"
                        required="required" 
                        onChange={this.onChange}/>
                    <input className="form-button" type="submit" value="Login" onClick={this.login}/>
                </form>
            </div>
        );
    }
}

export default LoginForm;