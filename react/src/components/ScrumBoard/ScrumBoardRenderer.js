import React, { Component } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import {navBarUrls, linkNames} from '../../NavBarUrls';
import ScrumBoard from './ScrumBoard';
import SideMenu from '../SideMenu/SideMenu';
import { ScrumBoardMenuUrls, ScrumBoardLinkNames } from '../../ScrumBoardSideMenuUrls';

class ScrumBoardRenderer extends Component {
    render() {
        return (
            <div>
                <NavigationBar active={0} navBarUrls={navBarUrls} linkNames={linkNames} />
                <SideMenu active={0} menuUrls={ScrumBoardMenuUrls} linkNames={ScrumBoardLinkNames} />
                <ScrumBoard />
            </div>
        );
    }
}

export default ScrumBoardRenderer;