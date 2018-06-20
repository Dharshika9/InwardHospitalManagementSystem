
import React, { Component } from 'react';
import PatientNavigation from './PatientNavigation';
import PatientmainBody from './PatientmainBody';

class PatientMainpage extends Component {

    render() {
        return<div>
            <PatientNavigation/>
            <PatientmainBody/>
        </div>
    }
}
export default PatientMainpage;