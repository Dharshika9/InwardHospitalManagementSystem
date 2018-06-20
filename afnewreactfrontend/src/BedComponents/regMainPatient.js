import React, { Component } from 'react';
import BedNavigation from './BedNavigation';
import regPatient from './regPatientBody';

class regMainPatient extends Component {

    render() {
        return<div>
            <BedNavigation/>
            <regPatient/>
        </div>
    }
}
export default regMainPatient;