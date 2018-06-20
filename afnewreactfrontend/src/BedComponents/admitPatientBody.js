import React , {Component} from 'react';
import PropTypes 			from "prop-types";


const date=new Date(Date.now()).toDateString()
const time=new Date(Date.now()).toLocaleTimeString()


export  default class admitPatientBody extends Component{


    static get propTypes() {
        return {

            admitPatient:PropTypes.func,
            BHTNumber: PropTypes.number,
            wardNo: PropTypes.number,
            bedNumber: PropTypes.String,
            patientId: PropTypes.number,
            patientName: PropTypes.String,
            admittedDate: PropTypes.String,
            admittedTime: PropTypes.String,
            DoctorInCharge: PropTypes.String,
            patientComplain: PropTypes.String

        }
    }

    constructor(props) {
        super(props);
    }

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.BHTNumber&&this.wardNo&&this.bedNumber&&this.patientId&&this.patientName&&this.admittedDate&&this.admittedTime&&this.DoctorInCharge&&this.patientComplain) {
            this.props.admitPatient
            ({
                BHTNumber: this.BHTNumber,
                wardNo: this.wardNo,
                bedNumber: this.bedNumber,
                patientId: this.patientId,
                patientName: this.patientName,
                admittedDate: this.admittedDate,
                admittedTime:this.admittedTime,
                DoctorInCharge: this.DoctorInCharge,
                patientComplain: this.patientComplain
            });
            this.BHTNumber = '';
            this.wardNo = '';
            this.bedNumber = '';
            this.patientId = '';
            this.patientName = '';
            this.admittedDate = '';
            this.admittedTime='';
            this.DoctorInCharge = '';
            this.patientComplain = '';
        }
    }



    onNameChangeBHTNumber(event) {
        event.preventDefault();
        event.stopPropagation();
        this.wardType = event.target.value;
    }

    onNameChangewardNumber(event) {
        event.preventDefault();
        event.stopPropagation();
        this.wardType = event.target.value;
    }
    onNameChangebedNumber(event) {
        event.preventDefault();
        event.stopPropagation();
        this.wardType = event.target.value;
    }
    onNameChangebedNumber(event) {
        event.preventDefault();
        event.stopPropagation();
        this.wardType = event.target.value;
    }
    onNameChangepatientId(event) {
        event.preventDefault();
        event.stopPropagation();
        this.wardType = event.target.value;
    }
    onNameChangepatientName(event) {
        event.preventDefault();
        event.stopPropagation();
        this.wardType = event.target.value;
    }
    onNameChangeadmittedDate(event) {
        event.preventDefault();
        event.stopPropagation();
        this.wardType = event.target.value;
    }
    onNameChangeadmittedTime(event) {
        event.preventDefault();
        event.stopPropagation();
        this.wardType = event.target.value;
    }
    onNameChangeIncharge(event) {
        event.preventDefault();
        event.stopPropagation();
        this.wardType = event.target.value;
    }
    onNameChangepatientComplain(event) {
        event.preventDefault();
        event.stopPropagation();
        this.wardType = event.target.value;
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
                                    Ward Addmission
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-10">
                                            <form role="form" onSubmit={event => this.onSubmit(event)}>

                                                {/*BHT*/}
                                                <div className="form-group">
                                                    <label>BHT </label>
                                                    <input  className="form-control"  onChange={event => this.onNameChangeBHTNumber(event)}/>

                                                </div>


                                                {/*WardNo*/}
                                                <div className="form-group">
                                                    <label>Ward Number</label>
                                                    <input className="form-control"  onChange={event => this.onNameChangewardNumber(event)}/>

                                                </div>

                                                {/*bedNumber*/}
                                                <div className="form-group">
                                                    <label>BedNumber</label>
                                                    <input className="form-control"  onChange={event => this.onNameChangebedNumber(event)}/>

                                                </div>


                                                {/*patientId*/}
                                                <div className="form-group">
                                                    <label>Patient ID </label>
                                                    <input className="form-control"  onChange={event => this.onNameChangepatientId(event)}/>

                                                </div>


                                                {/*patientName*/}
                                                <div className="form-group">
                                                    <label>patient Name</label>
                                                    <input className="form-control" onChange={event => this.onNameChangepatientName(event)}/>

                                                </div>

                                                {/*admittedDate*/}
                                                <div className="form-group">
                                                    <label >Admitted Date </label>

                                                    <input value={date} className="form-control" onChange={event => this.onNameChangeadmittedDate(event)}/>

                                                </div>


                                                {/*admittedTime*/}
                                                <div className="form-group">
                                                    <label>Admitted Time  </label>
                                                    <input value={time} className="form-control" onChange={event => this.onNameChangeadmittedTime(event)}/>

                                                </div>

                                                {/*doctoerIncharge*/}
                                                <div className="form-group">
                                                    <label>Dococtor Incharge</label>
                                                    <input className="form-control" onChange={event => this.onNameChangeIncharge(event)}/>

                                                </div>

                                                {/*patientComplain*/}
                                                <div className="form-group">
                                                    <label>Phone</label>
                                                    <input className="form-control" onChange={event => this.onNameChangepatientComplain(event)}/>

                                                </div>


                                                <button type="submit" className="btn btn-info" >Admit Patient</button>
                                                <button type="reset" className="btn btn-info" >Reset</button>


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