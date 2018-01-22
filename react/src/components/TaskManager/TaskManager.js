import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TasksForm from '../TasksForm/TasksForm';
import TaskCreationForm from './TaskCreationForm/TaskCreationForm';
import apiBaseUrl from '../../ApplicationSettings';
import urls from '../../ApiUrls';

class TaskManager extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/TaskManager/' 
                    render={() => <TasksForm url={apiBaseUrl + urls.tasksManagementUrls.GetAllTasks} heading="All existing tasks" />} />
                <Route path='/TaskManager/CreateATask' component={TaskCreationForm} />
            </Switch>
        );
    }
}

export default TaskManager;