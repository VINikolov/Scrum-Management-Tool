import React, { Component } from 'react';
import './SideMenuListItem.css';
import { Link } from 'react-router-dom'

class SideMenuListItem extends Component {
    render() {
        return (
            <li>
                <Link to={this.props.url}>
                    <div>
                        {this.props.text}
                    </div>
                </Link>
            </li>
        );
    }
}

export default SideMenuListItem;