import React, { Component } from 'react';
import './TasksForm.css';
import Task from '../../Task/Task';
import apiBaseUrl from '../../../ApplicationSettings';
import axios from 'axios';
import tasksManagementUrls from '../../../ApiUrls';

class TasksForm extends Component {
    componentDidMount() {
        axios.get(apiBaseUrl + tasksManagementUrls.GetAllTasks);
    }

    render() {
        return (
            <div className="tasks-container">
                <h1 className="tasks-heading">
                    All existing tasks
                </h1>

                <Task />
            </div>
        );
    }
}

export default TasksForm;