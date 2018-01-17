import React, { Component } from 'react';
import './ScrumBoard.css';
import SideMenu from '../SideMenu/SideMenu';

class ScrumBoard extends Component {
    render() {
        return (
            <div className="content">
                <SideMenu />
            </div>
        );
    }
}

export default ScrumBoard;