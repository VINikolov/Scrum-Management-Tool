import React, { Component } from 'react';

class TaskCreationDropdownMenu extends Component {
    render() {
        return (
                <select name={this.props.menuName}>
                    {this.props.menuElements.map(item => 
                        <option key={item} value={item}>{item}</option>)}
                </select>
        );
    }
}

export default TaskCreationDropdownMenu;