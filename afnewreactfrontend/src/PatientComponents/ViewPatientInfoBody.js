import React , {Component} from 'react';

import axios from 'axios';
import Wards from './maincomponents/PatientInfo';

export default class ViewPatientInfoBody extends Component{


    constructor(props) {
        super(props);
        this.state = {
            PInfo: []
        }
        this.getPatientDetails();
    }
    getPatientDetails() {
        axios.get("http://localhost:8081" + '/PatientInfo').then(res => {
            this.setState({
                PInfo: res.data.data || res.data
            });
        })
    }



    render(){
        return <div className="content-wrapper">
            <div className="container-fluid">
                <Wards PInfo={this.state.PInfo} getPatientDetails = {() => this.getPatientDetails()}/>

            </div>
        </div>
    }
}