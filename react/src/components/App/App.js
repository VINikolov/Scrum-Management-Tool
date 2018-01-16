import React, { Component } from 'react';
import './App.css';
import RegisterForm from './RegisterForm/RegisterForm'
import LoginForm from './LoginForm/LoginForm';

class App extends Component {
    render() {
        return (
            <div className="content">
                <div className="main-heading">
                    <h1>
                        Scrum management tool
                    </h1>
                </div>
                <RegisterForm />
                <LoginForm />
            </div>   
        );
    }
}

export default App;