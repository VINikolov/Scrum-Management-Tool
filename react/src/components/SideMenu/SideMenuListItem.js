import React, { Component } from 'react';
import './SideMenuListItem.css';
import { Link } from 'react-router-dom'

class SideMenuListItem extends Component {
    render() {
        return (
            <li className={this.props.isActive ? 'active side-menu-list-item' : 'side-menu-list-item'}>
                <Link to={this.props.url}>{this.props.text}</Link>
            </li>
        );
    }
}

export default SideMenuListItem;