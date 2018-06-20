'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import reactDOM from 'react-dom';


export  default class Bed extends Component{
    static get propTypes() {
        return {
            bed : PropTypes.object,
            getBeDetails: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.bed = this.props.bed;
        this.getBeDetails = this.props.getBeDetails;
        this.click=this.click.bind(this);

    }

    click(event) {
        event.preventDefault();
        event.stopPropagation();

    }

    render(){

        var style={width: 300, height: 220}
        var textAlign={textAlign: "center"}

        return <div>


                    <div className="card bg-light mb-3" style={style}>
                        <div className="card-header" style={textAlign}>Bed No - {this.bed.bedNumber}</div>
                        <div className="card-body">

                            <label>Patient ID :{this.bed.patientId} </label><br/>
                            <label>Patient Name:{this.bed.patientName} </label><br/>
                            <label>Admitted Date:{this.bed.admittedDate} </label><br/>
                            <label>Admitted Time:{this.bed.admittedTime} </label><br/>
                            {/*<button type="button" className="btn btn-info" onClick={(event)=>{this.click(event)}}>ViewMore</button>*/}
                            <button type="button" className="btn btn-info">BHT</button>
                            {/*BHT */}


                        </div>
                    </div>

            </div>

    }
}