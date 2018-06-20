import React, { Component } from 'react';
import WardNavigation from './WardNavigation';
import Wardmainbody from './Wardmainbody';

class Mainpage extends Component {

    render() {
        return<div>
            <WardNavigation/>
            <Wardmainbody/>
        </div>
    }
}
export default Mainpage;
