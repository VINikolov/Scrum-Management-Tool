import React, { Component } from 'react';
import './SideMenu.css';
import SideMenuListItem from './SideMenuListItem';

class SideMenu extends Component {
    constructor(props) {
        super(props);
        const tabs = [];
        for (var key in this.props.linkNames) {
            tabs.push(this.props.linkNames[key]);
        }

        this.state = {
            activeTab: tabs[this.props.active],
            menuTabs: tabs
        };
        this.isActive = this.isActive.bind(this);
        this.createMenuTab = this.createMenuTab.bind(this);
    }

    isActive(menuTab) {
        return this.state.activeTab === menuTab;
    }

    createMenuTab(menuItem) {
        var url = this.findUrl(this.props.menuUrls, menuItem);
        return <SideMenuListItem key={menuItem} isActive={this.isActive(menuItem)} url={url.link} text={menuItem} />;
    }

    findUrl(array, element) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].linkName === element) {
                return array[i];
            }
        }
    }

    render() {
        return (
            <nav className="side-menu">
                <ul className="side-menu-list">
                    {this.state.menuTabs.map(menuItem => this.createMenuTab(menuItem), this)}
                </ul>
            </nav>
        );
    }
}

export default SideMenu;