'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import reactDOM from 'react-dom';

export default class Ward extends Component {
    static get propTypes() {
        return {
            ward: PropTypes.object,
            getWardDetails: PropTypes.func
        }
    }



    constructor(props) {
        super(props);
        this.ward = this.props.ward;
        this.getWardDetails = this.props.getPatientDetails;
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
                    <div className="card-header" style={textAlign}>Ward No - {this.ward.wardNo}</div>
                    <div className="card-body">


                        <label>Ward Type:{this.ward.wardType} </label><br/>
                        <label>Number of Beds:{this.ward.noOfBeds} </label><br/>
                        <label>Available Beds:{this.ward.availableBeds} </label><br/>
                        <button type="button" className="btn btn-info" onClick={(event)=>{this.click(event)}}>MoreDetails</button>
                        <button type="button" className="btn btn-info">View</button>
<<<<<<< HEAD
=======

>>>>>>> c44d8406a2963d2410e82af6130aa8625be19a68
                </div>
            </div>
        </div>
    }
}

