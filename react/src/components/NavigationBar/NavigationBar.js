import React, { Component } from 'react';
import './NavigationBar.css'
import ListItem from './ListItem'

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        const tabs = [
            this.props.linkNames.ScrumBoard,
            this.props.linkNames.PokerPlanning,
            this.props.linkNames.Logout
        ];
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
        var url = this.findUrl(this.props.navBarUrls, menuItem);
        return <ListItem key={menuItem} isActive={this.isActive(menuItem)} url={url.link} text={menuItem} />;
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
            <ul>
                {this.state.menuTabs.map(menuItem => this.createMenuTab(menuItem), this)}
            </ul>
        );
    }
}

export default NavigationBar;