import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TasksForm from './TasksForm/TasksForm';
import TaskCreationForm from './TaskCreationForm/TaskCreationForm';

class TaskManager extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/TaskManager/' component={TasksForm} />
                <Route path='/TaskManager/CreateATask' component={TaskCreationForm} />
            </Switch>
        );
    }
}

export default TaskManager;