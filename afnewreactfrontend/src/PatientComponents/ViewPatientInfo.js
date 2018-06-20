import React, { Component } from 'react';
import PatientNavigation from './PatientNavigation';
import ViewTestsBody from './ViewPatientInfoBody';

class ViewPatientInfo extends Component {

    render() {
        return<div>
            <PatientNavigation/>
            <ViewPatientInfoBody/>
        </div>
    }
}
export default ViewPatientInfo;