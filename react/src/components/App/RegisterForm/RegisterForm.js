import React, { Component } from 'react';
import './RegisterForm.css'
import InputField from '../InputField'
import FormButton from '../FormButton'

class RegisterForm extends Component {
    render() {
        return (
            <div className="reg-form">
                <div className="heading">
                    <h2>Register</h2>
                    
                    <form method="POST">
                        <InputField fieldType="text" fieldPlaceholder="username"/>
                        <InputField fieldType="password" fieldPlaceholder="password"/>
                        <InputField fieldType="password" fieldPlaceholder="confirm password"/>
                        <InputField fieldType="text" fieldPlaceholder="email"/>
                        <FormButton buttonText="Sign up"/>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default RegisterForm;