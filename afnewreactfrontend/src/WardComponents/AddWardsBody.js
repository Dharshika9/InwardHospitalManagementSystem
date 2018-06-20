import React , {Component} from 'react';
import PropTypes 			from "prop-types";
import ManageBed from "./ManageBed";

export default class AddWardsBody extends Component{


    static get propTypes() {
        return {
            addWard: PropTypes.func,
            wardNo: PropTypes.string,
            wardType: PropTypes.string,
            noOfBeds: PropTypes.number,
            availableBeds: PropTypes.number,
            location: PropTypes.string,
            visitingTimes: PropTypes.string,
            incharge: PropTypes.string,
            phone: PropTypes.number,
            note: PropTypes.string

        }
    }

    constructor(props) {
        super(props);
    }

    onNameChangeWardNo(event) {
        event.preventDefault();
        event.stopPropagation();
        this.wardNo = event.target.value;

    }


    onNameChangeWardType(event) {
        event.preventDefault();
        event.stopPropagation();
        this.wardType = event.target.value;

    }

    onNameChangeNoOfBeds(event) {
        event.preventDefault();
        event.stopPropagation();
        this.noOfBeds= event.target.value;

    }
    onNameChangeAvailableBeds(event) {
        event.preventDefault();
        event.stopPropagation();
        this.availableBeds = event.target.value;
    }
    onNameChangeLocation(event) {
        event.preventDefault();
        event.stopPropagation();
        this.location = event.target.value;
    }
    onNameChangeVisitingTimes(event) {
        event.preventDefault();
        event.stopPropagation();
        this.visitingTimes = event.target.value;
    }
    onNameChangeIncharge(event) {
        event.preventDefault();
        event.stopPropagation();
        this.incharge = event.target.value;
    }

    onNameChangePhone(event) {
        event.preventDefault();
        event.stopPropagation();
        this.phone = event.target.value;
    }
    onNameChangeNote(event) {
        event.preventDefault();
        event.stopPropagation();
        this.note = event.target.value;
    }


    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(this.wardNo);
        console.log(this.wardType);
        console.log(this.noOfBeds);
        console.log(this.availableBeds);
        console.log(this.location);
        console.log(this.visitingTimes);
        console.log(this.incharge);
        console.log(this.phone);
        console.log(this.note);


        if (this.wardNo&&this.wardType&&this.noOfBeds&&this.availableBeds&&this.location&&this.visitingTimes&&this.incharge&&this.phone&&this.note) {
<<<<<<< HEAD
            this.props.addWard
            ({
                wardNo: this.wardNo,
=======

            this.props.addWard(
                {wardNo: this.wardNo,
>>>>>>> 46f44ca2a8ea884ec215af73493a15bacab3eeb5
                wardType: this.wardType,
                noOfBeds: this.noOfBeds,
                availableBeds: this.availableBeds,
                location: this.location,
                visitingTimes: this.visitingTimes,
                incharge:this.incharge,
                phone: this.phone,
                note: this.note
            });
            this.wardNo = '';
            this.wardType = '';
            this.noOfBeds = '';
            this.availableBeds = '';
            this.location = '';
            this.visitingTimes = '';
            this.incharge='';
            this.phone = '';
            this.note = '';


        }
    }

    render(){

        var style={width: 300}
        var textAlign={textAlign: "center"}
        return <div className="content-wrapper">
            {console.log('called')}
            <div className="container-fluid">

               < div className="container-new">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="panel panel-default">
                                <div className="panel-heading" style={textAlign}>
                                    Ward Addmission
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-10">
                                            <div className="ward-main ">
                                            <form role="form" onSubmit={event => this.onSubmit(event)}>

                                                <div className="form-group">
                                                    <label>Ward No</label>
                                                    <input className="form-control"  onChange={event => this.onNameChangeWardNo(event)}/>

                                                </div>


                                                <div className="form-group" onChange={event => this.onNameChangeWardType(event)}>
                                                    <label>Ward Type</label>
                                                    <select className="form-control">
                                                        <option>Maternity</option>
                                                        <option>Pediatric</option>

                                                    </select>
                                                </div>





                                                <div className="form-group">
                                                    <label>No Of Beds</label>
                                                    <input className="form-control" onChange={event => this.onNameChangeNoOfBeds(event)}/>

                                                </div>
                                                <div className="form-group">
                                                    <label>Available Beds</label>
                                                    <input className="form-control" onChange={event => this.onNameChangeAvailableBeds(event)}/>

                                                </div>
                                                <div className="form-group">
                                                    <label>Location</label>
                                                    <input className="form-control" onChange={event => this.onNameChangeLocation(event)}/>

                                                </div>
                                                <div className="form-group">
                                                    <label>Visiting Hours</label>
                                                    <input className="form-control" onChange={event => this.onNameChangeVisitingTimes(event)}/>

                                                </div>
                                                <div className="form-group">
                                                    <label>Incharge</label>
                                                    <input className="form-control" onChange={event => this.onNameChangeIncharge(event)}/>

                                                </div>
                                                <div className="form-group">
                                                    <label>Phone</label>
                                                    <input className="form-control" onChange={event => this.onNameChangePhone(event)}/>

                                                </div>

                                                <div className="form-group">
                                                    <label>Note</label>
                                                    <textarea className="form-control" rows="3" name="note" onChange={event => this.onNameChangeNote(event)}/>
                                                </div>

                                                <button type="submit" className="btn btn-info" >Add</button>
                                                <button type="reset" className="btn btn-info" >Reset</button>


                                            </form>
                                                <ManageBed/>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                </div>
                </div>

            </div>

    }
}