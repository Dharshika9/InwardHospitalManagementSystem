import React , {Component} from 'react';

import axios from 'axios';
import Beds				from './MainComponents/Beds';

export  default class viewBedsBody extends  Component{

    constructor(props) {
        super(props);
        this.state = {
            beds: []
        }
        this.getBedDetails();
    }

getBedDetails()
{
    axios.get("http://localhost:8081" + '/admission').then(res => {
        this.setState({
            wards: res.data.data || res.data
        });
    })
}


render(){
    return <div className="content-wrapper">
        <div className="container-fluid">
            <Beds beds={this.state.beds} getBedDetails = {() => this.getBedDetails()}/>
            <div className="container">
                <button type="button" className="btn btn-info" href="/regPatient">Add Patient</button>
            </div>

        </div>
    </div>
}

}