import React, { Component } from 'react';
import './ListItem.css';
import { Link } from 'react-router-dom'

class ListItem extends Component {
    render() {
        return (
            <li className={this.props.isActive ? 'list-item active' : 'list-item'}>
                <Link to={this.props.url}>{this.props.text}</Link>
            </li>
        );
    }
}

export default ListItem;