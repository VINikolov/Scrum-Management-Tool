import React, { Component } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import {navBarUrls, linkNames} from '../../NavBarUrls';
import ScrumBoard from './ScrumBoard';

class ScrumBoardRenderer extends Component {
    render() {
        return (
            <div>
                <NavigationBar active={0} navBarUrls={navBarUrls} linkNames={linkNames} />
                <ScrumBoard />
            </div>
        );
    }
}

export default ScrumBoardRenderer;