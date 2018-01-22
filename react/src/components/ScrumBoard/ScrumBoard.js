import React, { Component } from 'react';
import './ScrumBoard.css';
import { Switch, Route } from 'react-router-dom';
import TasksForm from '../TasksForm/TasksForm';
import apiBaseUrl from '../../ApplicationSettings';
import urls from '../../ApiUrls';

class ScrumBoard extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/ScrumBoard/' render={() => 
                    <TasksForm url={apiBaseUrl + urls.tasksManagementUrls.Backlog} heading="Backlog" />} />
                {/* <Route path='/TaskManager/CreateATask' component={} /> */}
            </Switch>
        );
    }
}

export default ScrumBoard;