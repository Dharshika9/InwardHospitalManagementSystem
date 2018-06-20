import React, { Component } from 'react';
import BedNavigation from './BedNavigation';
import AdmitPatientBody from './admitPatientBody';
import axios                from 'axios';

export default class admitPatient extends Component{

    constructor(props) {
        super(props);
        this.state = {
            patientAdmission: [],
            wardDetails:Object
        }
        this.getWardDetails()

    }


    getWardDetails(wardNo){

        axios.get("http://localhost:8081"+'/wards',wardNo).then(res =>{
            this.setState.wardDetails(res.data)
            // wardDetails(res.data.data||res.data)

        }).catch()
    }


    admitPatient(patientAdmission) {
        axios.post("http://localhost:8081" + '/wards', {
            BHTNumber: patientAdmission.BHTNumber,
            wardNo: patientAdmission.wardNo,
            bedNumber: patientAdmission.bedNumber,
            patientId: patientAdmission.patientId,
            patientName: patientAdmission.patientName,
            admittedDate: patientAdmission.admittedDate,
            admittedTime: patientAdmission.admittedTime,
            DoctorInCharge: patientAdmission.DoctorInCharge,
            patientComplain: patientAdmission.patientComplain
        }).then(result => {
            if(result.status == 200) {
                console.log("Admission SuccessFully Added!");
            }
        }).catch(err => {
            alert(err);
        })
    }



    render() {
        return<div>
            <BedNavigation/>
            <AdmitPatientBody admitPatient={patientAdmission => this.admitPatient(patientAdmission)}/>
        </div>
    }

}