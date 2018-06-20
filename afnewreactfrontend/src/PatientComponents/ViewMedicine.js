import React, { Component } from 'react';
import PatientNavigation from './PatientNavigation';
import ViewMedicineBody from './ViewMedicineBody';

class ViewMedicine extends Component {

    render() {
        return<div>
            <PatientNavigation/>
            <ViewMedicineBody/>
        </div>
    }
}
export default ViewMedicine;