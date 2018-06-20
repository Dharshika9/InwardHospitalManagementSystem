import React , {Component} from 'react';
import PropTypes 			from 'prop-types';
import axios                from 'axios';

export default class FormManageWard extends Component{

    static get propTypes() {
        return {
            wardDetails :PropTypes.array

        }
    }

    constructor(props) {
        super(props);
        console.log(this.props.ward);
        this.state = {
            wardNo: '',
            wardType: 'Maternity',
            noOfbeds: '',
            availableBeds: '',
            location: '',
            visitingTimes: '',
            incharge: '',
            phone: '',
            note: ''
        }
            this.setChanges = this.setChanges.bind(this);
            this.updateWardDetails = this.updateWardDetails.bind(this);


    }
    componentWillReceiveProps(props){
        this.setState(props);
    }

    setChanges(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({[event.target.name]:event.target.value});

    }

    updateWardDetails(){
        axios.put('http://localhost:8081/wards/update_specific_ward'+this.props.params.wardNo,{
            wardNo:this.state.wardNo,
            wardType:this.state.wardType,
            noOfbeds:this.state.noOfbeds,
            availableBeds:this.state.availableBeds,
            location:this.state.location,
            visitingTimes: this.state.visitingTimes,
            incharge:this.state.incharge,
            phone:this.state.phone,
            note:this.state.note


        }).then((res) =>{
            if(res.data.success === false){
                alert("Validation Error..!\n"+res.data.data);
            }
            if(res.data.success === true){
                alert("Success..!\n"+res.data.data);
            }
        }).catch((err)=>{
            console.log(err);
            alert(err);
        });
    }

    render() {
        this.wardDetails = this.props.ward;
        console.log(this.wardDetails);
        return <div>
                <form role="form" >
                    <div className="form-group">
                        <label>Ward No</label>
                        <input className="form-control" type="text" value={this.wardDetails.wardNo} name={'wardNo'} onChange={event => this.setChanges(event)}/>

                    </div>



                    <div className="form-group">
                        <label>Ward Type</label>
                        <select className="form-control" name={'wardType'} onChange={event => this.setChanges(event)}>
                            <option selected={this.wardDetails.wardType === 'Maternity'}> Maternity</option>
                            <option selected={this.wardDetails.wardType === 'Pediatric'}> Pediatric</option>

                        </select>
                    </div>


                    <div className="form-group">
                        <label>No Of Beds</label>
                        <input className="form-control" placeholder={this.wardDetails.noOfBeds} name={'noOfBeds'} onChange={event => this.setChanges(event)}/>

                    </div>
                    <div className="form-group">
                        <label>Available Beds</label>
                        <input className="form-control" placeholder={this.wardDetails.availableBeds} name={'availableBeds'} onChange={event => this.setChanges(event)}/>

                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input className="form-control" placeholder={this.wardDetails.location} name={'location'} onChange={event => this.setChanges(event)}/>

                    </div>
                    <div className="form-group">
                        <label>Visiting Hours</label>
                        <input className="form-control" placeholder={this.wardDetails.visitingTimes} name={'visitingTimes'} onChange={event => this.setChanges(event)}/>

                    </div>
                    <div className="form-group">
                        <label>Incharge</label>
                        <input className="form-control" placeholder={this.wardDetails.incharge} name={'incharge'} onChange={event => this.setChanges(event)}/>

                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input className="form-control" placeholder={this.wardDetails.phone} name={'phone'} onChange={event => this.setChanges(event)}/>

                    </div>

                    <div className="form-group">
                        <label>Note</label>
                        <textarea className="form-control" rows="3" name="note"  placeholder={this.wardDetails.note} name={'note'} onChange={event => this.setChanges(event)}></textarea>
                    </div>

                    <button  type={'button'} className="btn btn-info" onClick={this.updateWardDetails}>Update</button>
                     <button type="reset" className="btn btn-info" >Reset</button>


                </form>
            </div>

    }


}