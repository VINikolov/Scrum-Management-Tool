import React, { Component } from 'react';
import './InputField.css';

class InputField extends Component {
    render() {
        return (
            <input className="input-field" type={this.props.fieldType} 
                    placeholder={this.props.fieldPlaceholder}
                    name={this.props.name}
                    required="required"/>
        );
    }
}

export default InputField;