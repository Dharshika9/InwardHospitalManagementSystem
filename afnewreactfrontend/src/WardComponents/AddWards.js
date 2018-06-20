import React, { Component } from 'react';
import WardNavigation from './WardNavigation';
import AddWardsBody from './AddWardsBody';
import axios                from 'axios';

class AddWards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wards: []
        }

    }
    addWard(ward) {
        axios.post("http://localhost:8081" + '/wards/', {
            wardNo: ward.wardNo,
            wardType: ward.wardType,
            noOfBeds: ward.noOfBeds,
            availableBeds: ward.availableBeds,
            location: ward.location,
            visitingTimes: ward.visitingTimes,
            incharge: ward.incharge,
            phone: ward.phone,
            note: ward.note
        }).then(result => {
            if(result.status == 200) {
                alert("Ward SuccessFully Added!");

            }
        }).catch(err => {
            alert(err);
        })
    }


    render() {
        return<div>
            <WardNavigation/>
            <AddWardsBody addWard={ward => this.addWard(ward)}/>
        </div>
    }
}
export default  AddWards;