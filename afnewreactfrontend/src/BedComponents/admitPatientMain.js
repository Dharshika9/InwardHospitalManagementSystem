import React, { Component } from 'react';
import BedNavigation from './BedNavigation';
import admitPatient from './admitPatientBody';

class admitPatientMain extends Component {

    render() {
        return<div>
            <BedNavigation/>
            <admitPatient/>
        </div>
    }
}
export default admitPatientMain;