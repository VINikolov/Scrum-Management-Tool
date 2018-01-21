import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
    render() {
        return (
            <div className="task">
                <h3 className="task-name">
                    {this.props.name}
                </h3>
                Created on: {this.props.creationDate}
                <div className="task-priority">
                    Priority: {this.props.priority}
                </div>
                <p className="task-description">
                    <h4>Description:</h4> {this.props.description}
                </p>
                <div>
                    <h4>Assigned to:</h4> {this.props.assignedTo}
                </div>
            </div>
        );
    }
}

export default Task;