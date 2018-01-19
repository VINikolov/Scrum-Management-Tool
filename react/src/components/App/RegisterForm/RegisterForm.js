import React, { Component } from 'react';
import './RegisterForm.css';
import InputField from '../InputField';
import FormButton from '../FormButton';
import apiBaseUrl from '../../../ApplicationSettings';
import urls from '../../../ApiUrls';

class RegisterForm extends Component {
    render() {
        return (
            <div className="reg-form">
                <div className="heading">
                    <h2>Register</h2>
                    
                    <form method="POST" action={apiBaseUrl + urls.userManagementUrls.RegisterUser}>
                        <InputField fieldType="text" name="username" fieldPlaceholder="username"/>
                        <InputField fieldType="password" name="password" fieldPlaceholder="password"/>
                        <InputField fieldType="password" name="passwordConfirmation" fieldPlaceholder="confirm password"/>
                        <InputField fieldType="text" name="email" fieldPlaceholder="email"/>
                        <FormButton buttonText="Sign up"/>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default RegisterForm;