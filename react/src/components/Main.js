import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App/App';
import ScrumBoardRenderer from './ScrumBoard/ScrumBoardRenderer'
import TaskManagerRenderer from './TaskManager/TaskManagerRenderer';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/ScrumBoard' component={ScrumBoardRenderer} />
                <Route path='/TaskManager' component={TaskManagerRenderer} />
            </Switch>
        );
    }
}

export default Main;
