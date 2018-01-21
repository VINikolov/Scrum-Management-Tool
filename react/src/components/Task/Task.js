import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
    render() {
        return (
            <div className="task">
                <h3 className="task-name">
                    {this.props.name}
                </h3>
                <div className="task-priority">
                    Priority: {this.props.priority}
                </div>
                <p className="task-description">
                    Description: {this.props.description}
                </p>
            </div>
        );
    }
}

export default Task;