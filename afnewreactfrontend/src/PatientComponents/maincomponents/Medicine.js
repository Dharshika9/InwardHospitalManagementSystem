'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';


class Medicine extends Component {
    static get propTypes() {
        return {
            Med: PropTypes.object,
            getMedicineDetails: PropTypes.func
        }
    }
    constructor(props) {
        super(props);
        this.Med = this.props.Med;
        this.getMedicineDetails = this.props.getPatientDetails;
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
                <div className="card-header" style={textAlign}>patient Id - {this.Med.PatientID}</div>
                <div className="card-body">



                    <label>date:{this.Med.Date} </label><br/>
                    <label>Doctor:{this.Med.Doctor} </label><br/>
                    <label>Age:{this.Med.patientAge} </label><br/>
                    <label>MedicineDescr:{this.Med.MedicineDescr} </label><br/>
                    {/*/  <button type="button" className="btn btn-info" onClick={(event)=>{this.click(event)}}>MoreDetails</button>*/}
                    {/*<button type="button" className="btn btn-info">View</button>*/}


                </div>




            </div>
        </div>
    }
}
