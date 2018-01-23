import React, { Component } from 'react';
import './Task.css';
import EditTaskPopup from './EditTaskPopup';

class Task extends Component {
    constructor(props) {
        super(props);

        this.togglePopup = this.togglePopup.bind(this);

        this.state = {
            showPopup: false
        };
    }

    togglePopup(event) {
        event.preventDefault();
        this.setState({
          showPopup: !this.state.showPopup
        });
    }

    render() {
        return (
            <div>
                <div className="task" onClick={(event) => this.togglePopup(event)}>
                    <h3 className="task-name">
                        {this.props.name}
                    </h3>
                    <h4>Created on:</h4> {this.props.creationDate}
                    <div>
                        <h4>Priority:</h4> {this.props.priority}
                    </div>
                    <div>
                        <h4>Status:</h4> {this.props.status}
                    </div>
                </div>
                {this.state.showPopup ? 
                    <EditTaskPopup
                        name={this.props.name}
                        description={this.props.description}
                        estimation={this.props.estimation}
                        status={this.props.status}
                        assignedTo={this.props.assignedTo}
                        priority={this.props.priority}
                        placement={this.props.placement}
                        closePopup={this.togglePopup}
                    />
                    : null
                }
            </div>
        );
    }
}

export default Task;