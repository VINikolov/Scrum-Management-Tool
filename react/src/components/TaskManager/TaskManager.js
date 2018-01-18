import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TasksForm from './TasksForm/TasksForm';
import TaskCreationForm from './TaskCreationForm/TaskCreationForm';

class TaskManager extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={TasksForm} />
                    <Route path='/CreateATask' component={TaskCreationForm} />
                </Switch>
            </div>
        );
    }
}

export default TaskManager;