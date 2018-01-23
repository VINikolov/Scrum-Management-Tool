import React, { Component } from 'react';

class TaskCreationInputField extends Component {
    render() {
        return (
            <input type="text" 
                placeholder={this.props.fieldPlaceholder}
                name={this.props.name}
                required={this.props.required} />
        );
    }
}

export default TaskCreationInputField;