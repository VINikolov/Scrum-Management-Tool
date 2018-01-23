import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App/App';
import ScrumBoardRenderer from './ScrumBoard/ScrumBoardRenderer'

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/ScrumBoard' component={ScrumBoardRenderer} />
            </Switch>
        );
    }
}

export default Main;
