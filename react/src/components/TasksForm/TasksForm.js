import React, { Component } from 'react';
import './TasksForm.css';
import Task from '../Task/Task';
import axios from 'axios';

class TasksForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        };

        this.createTasks = this.createTasks.bind(this);
        this.getTasks = this.getTasks.bind(this);
    }

    getTasks() {
        axios.get(this.props.url)
            .then((response) => {
                this.setState({
                    tasks: response.data
                })
            });
    }

    createTasks(tasks) {
        return tasks.map((task) => <Task key={task.Name} name={task.Name} 
                                        description={task.Description}
                                        estimation={task.Estimation}
                                        status={task.Status}
                                        assignedTo={task.AssignedTo}
                                        priority={task.Priority}
                                        creationDate={task.CreationDate}
                                        placement={task.TaskPlacement} />);
    }

    render() {
        this.getTasks();
        return (
            <div className="tasks-container">
                <h1 className="tasks-heading">
                    {this.props.heading}
                </h1>
                {this.createTasks(this.state.tasks)}
            </div>
        );
    }
}

export default TasksForm;