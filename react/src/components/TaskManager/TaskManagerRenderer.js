import React, { Component } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import {navBarUrls, linkNames} from '../../NavBarUrls';
import SideMenu from '../SideMenu/SideMenu';
import TaskManager from './TaskManager';
import { TaskManagerMenuUrls, TaskManagerLinkNames } from '../../TaskManagerSideMenuUrls';

class TaskManagerRenderer extends Component {
    render() {
        return (
            <div>
                <NavigationBar active={1} navBarUrls={navBarUrls} linkNames={linkNames} />
                <SideMenu active={0} menuUrls={TaskManagerMenuUrls} linkNames={TaskManagerLinkNames} />
                <TaskManager />
            </div>
        );
    }
}

export default TaskManagerRenderer;