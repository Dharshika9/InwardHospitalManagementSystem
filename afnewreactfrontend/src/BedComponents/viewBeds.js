import React, { Component } from 'react';
import BedNavigation from './BedNavigation';
import ViewBedsBody from './viewBedsBody';

class viewBeds extends Component {

    render() {
        return<div>
            <BedNavigation/>
            <ViewBedsBody/>
        </div>
    }
}
export default viewBeds;