import React, { Component } from 'react';
import './ScrumBoard.css';
import { Switch, Route } from 'react-router-dom';
import TasksForm from '../TasksForm/TasksForm';
import apiBaseUrl from '../../ApplicationSettings';
import urls from '../../ApiUrls';
import TaskCreationForm from '../TaskCreationForm/TaskCreationForm';

class ScrumBoard extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/ScrumBoard/Backlog' render={() => 
                    <TasksForm url={apiBaseUrl + urls.tasksManagementUrls.Backlog} heading="Backlog" />} />
                <Route path='/ScrumBoard/ActiveSprint' render={() => 
                    <TasksForm url={apiBaseUrl + urls.tasksManagementUrls.ActiveSprint} heading="Active sprint tasks"/>} />
                <Route path='/ScrumBoard/CompletedTasks' render={() => 
                    <TasksForm url={apiBaseUrl + urls.tasksManagementUrls.CompleteTasks} heading="Completed tasks" /> }/>
                <Route path='/ScrumBoard/CreateATask' component={TaskCreationForm} />
            </Switch>
        );
    }
}

export default ScrumBoard;