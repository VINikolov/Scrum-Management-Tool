import React, { Component } from 'react';
import './FormButton.css';

class FormButton extends Component {
    render() {
        return (
            <input className="form-button" type="Submit" value={this.props.buttonText} />
        );
    }
}

export default FormButton;
