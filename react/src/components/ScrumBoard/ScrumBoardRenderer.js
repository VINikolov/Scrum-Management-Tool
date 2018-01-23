import React, { Component } from 'react';
import ScrumBoard from './ScrumBoard';
import SideMenu from '../SideMenu/SideMenu';
import { ScrumBoardMenuUrls, ScrumBoardLinkNames } from '../../ScrumBoardSideMenuUrls';

class ScrumBoardRenderer extends Component {
    render() {
        return (
            <div>
                <SideMenu menuUrls={ScrumBoardMenuUrls} linkNames={ScrumBoardLinkNames} />
                <ScrumBoard />
            </div>
        );
    }
}

export default ScrumBoardRenderer;