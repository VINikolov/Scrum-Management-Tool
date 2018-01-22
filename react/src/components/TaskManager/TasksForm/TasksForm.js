import React, { Component } from 'react';
import './TasksForm.css';
import Task from '../../Task/Task';
import apiBaseUrl from '../../../ApplicationSettings';
import axios from 'axios';
import urls from '../../../ApiUrls';

class TasksForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        };

        this.createTasks = this.createTasks.bind(this);
    }

    componentWillMount() {
        axios.get(apiBaseUrl + urls.tasksManagementUrls.GetAllTasks)
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
                                        creationDate={task.CreationDate} />);
    }

    render() {
        return (
            <div className="tasks-container">
                <h1 className="tasks-heading">
                    All existing tasks
                </h1>
                {this.createTasks(this.state.tasks)}
            </div>
        );
    }
}

export default TasksForm;