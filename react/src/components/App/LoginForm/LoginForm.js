import React, { Component } from 'react';
import './LoginForm.css'
import InputField from '../InputField'
import FormButton from '../FormButton'

class LoginForm extends Component {
    render() {
        return (
            <div className="login-form">
                <div className="heading">
                    <h2>Login</h2>
                </div>

                <form method="POST">
                    <InputField fieldType="text" fieldPlaceholder="username" />
                    <InputField fieldType="password" fieldPlaceholder="password"/>
                    <FormButton buttonText="Login" />
                </form>
            </div>
        );
    }
}

export default LoginForm;