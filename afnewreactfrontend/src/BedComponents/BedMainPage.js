import React, { Component } from 'react';
import BedNavigation from './BedNavigation';
import Bedmainbody from './BedMainBody';

class BedMainPage extends Component {

    render() {
        return<div>
            <BedNavigation/>
            <Bedmainbody/>
        </div>
    }
}
export default BedMainPage;