import React, { Component } from 'react';
import './LoginForm.css';
import InputField from '../InputField';
import FormButton from '../FormButton';
import apiBaseUrl from '../../../ApplicationSettings';
import urls from '../../../ApiUrls';

class LoginForm extends Component {
    render() {
        return (
            <div className="login-form">
                <div className="heading">
                    <h2>Login</h2>
                </div>

                <form method="POST" action={apiBaseUrl + urls.userManagementUrls.LoginUser}>
                    <InputField fieldType="text" name="username" fieldPlaceholder="username" />
                    <InputField fieldType="password" name="password" fieldPlaceholder="password" />
                    <FormButton buttonText="Login" />
                </form>
            </div>
        );
    }
}

export default LoginForm;