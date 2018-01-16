import React, { Component } from 'react';
import './InputField.css';

class InputField extends Component {
    render() {
        return (
            <input className="input-field" type={this.props.fieldType} 
                    placeholder={this.props.fieldPlaceholder}
                    required="required"/>
        );
    }
}

export default InputField;