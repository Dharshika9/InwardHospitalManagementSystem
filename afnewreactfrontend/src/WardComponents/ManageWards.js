import React, { Component } from 'react';
import WardNavigation from './WardNavigation';
import ManageWardsBody from './ManageWardsBody';

class ManageWards extends Component {

    render() {
        return<div>
            <WardNavigation/>
            <ManageWardsBody/>
        </div>
    }
}
export default  ManageWards;