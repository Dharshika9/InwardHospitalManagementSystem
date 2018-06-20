'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';


class PatientInfo extends Component {
    static get propTypes() {
        return {
            PInfo: PropTypes.object,
            getpatientDetails: PropTypes.func
        }
    }
    constructor(props) {
        super(props);
        this.PInfo = this.props.PInfo;
        this.getpatientDetails = this.props.getPatientDetails;
        this.click=this.click.bind(this);

    }

    click(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    render() {


        var style={width: 300, height: 220}
        var textAlign={textAlign: "center"}


        return<div>


            <div className="card bg-light mb-3 Row" style={style}>
                <div className="card-header" style={textAlign}>patient Id - {this.PInfo.patientId}</div>
                <div className="card-body">



                    <label>Name:{this.PInfo.patientName} </label><br/>
                    <label>patient DOB:{this.PInfo.patientDOB} </label><br/>
                    <label>Age:{this.PInfo.patientAge} </label><br/>
                    <label>Gender:{this.PInfo.patientGender} </label><br/>
                    <label>NIC:{this.PInfo.patientNIC} </label><br/>
                    <label>Status:{this.PInfo.patientStatus} </label><br/>
                    <label>ContactNo:{this.PInfo.patientContactNo} </label><br/>
                    <label>Address:{this.PInfo.patientAddress} </label><br/>

                    {/*/  <button type="button" className="btn btn-info" onClick={(event)=>{this.click(event)}}>MoreDetails</button>*/}
                    {/*<button type="button" className="btn btn-info">View</button>*/}


                </div>



            </div>
        </div>
    }
}
