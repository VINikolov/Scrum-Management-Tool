import React, { Component } from 'react';
import './App.css';
import RegisterForm from './RegisterForm/RegisterForm'
import LoginForm from './LoginForm/LoginForm';

class App extends Component {
    render() {
        return (
            <div className="content">
                <div className="main-heading">
                    Scrum management tool
                </div>
                <RegisterForm />
                <LoginForm />
            </div>   
        );
    }
}

export default App;