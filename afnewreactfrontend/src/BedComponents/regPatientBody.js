import React , {Component} from 'react';
import PropTypes 			from "prop-types";

export default class regPatientBody extends Component{

    static get propTypes() {
        return {
            regPatient: PropTypes.func,

            patientId: PropTypes.number,
            patientName: PropTypes.String,
            patientDOB: PropTypes.String,
            patientAge: PropTypes.number,
            patientGender: PropTypes.String,
            patientNIC: PropTypes.String,
            patientStatus: PropTypes.String,
            patientContactNo: PropTypes.number,
            patientAddress: PropTypes.String

        }
    }

    constructor(props) {
        super(props);
    }

    onNameChangepatientId(event) {
        event.preventDefault();
        event.stopPropagation();
        this.patientId = event.target.value;
    }


    onNameChangepatientName(event) {
        event.preventDefault();
        event.stopPropagation();
        this.patientName = event.target.value;
    }

    onNameChangepatientAge(event) {
        event.preventDefault();
        event.stopPropagation();
        this.patientName = event.target.value;
    }

    onNameChangepatientGender(event) {
        event.preventDefault();
        event.stopPropagation();
        this.patientName = event.target.value;
    }

    onNameChangeNIC(event) {
        event.preventDefault();
        event.stopPropagation();
        this.patientName = event.target.value;
    }
    onNameChangeStatus(event) {
        event.preventDefault();
        event.stopPropagation();
        this.patientName = event.target.value;
    }


    onNameChangeContactNumber(event) {
        event.preventDefault();
        event.stopPropagation();
        this.patientName = event.target.value;
    }

    onNameChangeAddress(event) {
        event.preventDefault();
        event.stopPropagation();
        this.patientName = event.target.value;
    }

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();

        if (this.patientId&&this.patientName&&this.patientDOB&&this.patientAge&&this.patientGender&&this.patientNIC&&this.patientStatus&&this.patientContactNo&&this.patientAddress) {
            this.props.regPatient
            ({
                patientId: this.Number,
                patientName: this.String,
                patientDOB: this.String,
                patientAge: this.Number,
                patientGender: this.String,
                patientNIC: this.String,
                patientStatus:this.String,
                patientContactNo: this.Number,
                patientAddress: this.String
            });
            this.patientId = '';
            this.patientName = '';
            this.patientDOB = '';
            this.patientAge = '';
            this.patientGender = '';
            this.patientNIC = '';
            this.patientStatus='';
            this.patientContactNo = '';
            this.patientAddress = '';
        }
    }




    render(){
        var style={width: 300}
        var textAlign={textAlign: "center"}
        return <div className="content-wrapper">
            <div className="container-fluid">

                <div className="container">

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="panel panel-default">
                                <div className="panel-heading" style={textAlign}>
                                    Patient Registration
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-10">
                                            <form role="form" onSubmit={event => this.onSubmit(event)}>

                                                {/*patientId*/}
                                                <div className="form-group">
                                                    <label>Patient Id</label>
                                                    <input className="form-control"  onChange={event => this.onNameChangepatientId(event)}/>

                                                </div>

                                                {/*patientName*/}
                                                <div className="form-group">
                                                    <label>Patient Name</label>
                                                    <input className="form-control"  onChange={event => this.onNameChangepatientName(event)}/>

                                                </div>

                                                {/*patientDOB*/}
                                                {/*datePicker :-( */}
                                                <div className="form-group">
                                                    <label>Patient Name</label>
                                                    <input className="form-control"  onChange={event => this.onNameChangepatientName(event)}/>

                                                </div>

                                                {/*patientAge*/}
                                                <div className="form-group">
                                                    <label>Patient Age</label>
                                                    <input className="form-control"  onChange={event => this.onNameChangepatientAge(event)}/>

                                                </div>


                                                {/*genderRatio*/}
                                                <div className="form-group">
                                                    <div className="custom-control custom-radio" onChange={event => this.onNameChangepatientGender(event)}>
                                                        <input type="radio" id="customRadio1" name="customRadio"
                                                               className="custom-control-input" checked=""/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customRadio1"> Male
                                                            </label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio2" name="customRadio"
                                                               className="custom-control-input"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customRadio2">Female
                                                            </label>
                                                    </div>

                                                </div>




                                                {/*patientNIC*/}
                                                <div className="form-group">
                                                    <label>NIC</label>
                                                    <input className="form-control" onChange={event => this.onNameChangeNIC(event)}/>

                                                </div>


                                                {/*patientStatus*/}
                                                <div className="form-group">
                                                    <label htmlFor="exampleTextarea">Patient Status</label>
                                                    <textarea className="form-control" id="exampleTextarea"
                                                              rows="3" onChange={event => this.onNameChangeStatus(event)}>
                                                        </textarea>
                                                </div>

                                                {/*patientcontactNumber*/}

                                                <div className="form-group">
                                                    <label>Contact Number</label>
                                                    <input className="form-control" onChange={event => this.onNameChangeContactNumber(event)}/>

                                                </div>

                                                {/*patientaddress*/}
                                                <div className="form-group">
                                                    <label>Address</label>
                                                    <input className="form-control" onChange={event => this.onNameChangeAddress(event)}/>

                                                </div>

                                                <button type="submit" className="btn btn-info">Register Patient</button>
                                                {/*should have a link to admitpatient*/}

                                            </form>
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