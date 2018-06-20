import React, { Component } from 'react';
import PatientNavigation from './PatientNavigation';
import ViewTestsBody from './ViewTestsBody';

class ViewTests extends Component {

    render() {
        return<div>
            <PatientNavigation/>
            <ViewTestsBody/>
        </div>
    }
}
export default ViewTests;