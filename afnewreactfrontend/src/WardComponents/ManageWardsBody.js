import React , {Component} from 'react';
import axios                from 'axios';
import SearchManageWard from "./SearchManageWard";

export default class ManageWardsBody extends Component{

    constructor(props){
  -      super(props);
        this.state={
            ward :[]

        };
        this.getSpecificWard=this.getSpecificWard.bind(this);

    }


    getSpecificWard=function(event){
        event.preventDefault();
        const wardNo=event.target.elements.wardNo.value;
        axios.get('http://localhost:8081/wards/get_specific_ward/'+wardNo).then(res =>{


            this.setState({
                ward:res.data
            })

            console.log(this.state.ward);


        }).then();

    }


<<<<<<< HEAD


=======
    delete(wardNo) {
        console.log(wardNo);
        axios.delete('http://localhost:8081/wards/delete_specific_ward/'+wardNo).then(results => {
            if(results.status == 200) {
                alert("Ward SuccessFully Deleted!");
            }
        })
    }
>>>>>>> 46f44ca2a8ea884ec215af73493a15bacab3eeb5

    render(){


        return <div className="content-wrapper">
                    <div className="container-fluid">

                        <div className="container-new ">

                        <div className="panel-body">
                            <form onSubmit={event => this.getSpecificWard(event)} role="form">
                                <div className="form-group">
                                    <label>Enter Ward No : </label>
                                    <input className="form-control-new" placeholder="Enter text" name="wardNo"/>
                                </div>
                                <button type="submit" className="btn btn-info">View Details</button>

                            </form>

                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Ward No</th>
                                            <th>Ward Type</th>
                                            <th>No Of Beds</th>
                                            <th>Available Beds</th>
                                            <th>Location</th>
                                            <th>Visiting Hours</th>
                                            <th>Incharge</th>
                                            <th>Phone</th>
                                            <th>Note</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.ward.map(entry => <tr className={"success"}>
                                            <td>{entry.wardNo}</td>
                                            <td>{entry.wardType}</td>
                                            <td>{entry.noOfBeds}</td>
                                            <td>{entry.availableBeds}</td>
                                            <td>{entry.location}</td>
                                            <td>{entry.visitingTimes}</td>
                                            <td>{entry.incharge}</td>
                                            <td>{entry.phone}</td>
                                            <td>{entry.note}</td>
                                            <td> <button className="btn btn-info" onClick={(e) => this.delete(entry.wardNo)}>Delete</button></td>
                                        </tr>)
                                    }

                                    </tbody>
                                </table>
                            </div>

                        </div>

                         <SearchManageWard/>


                        </div>

                    </div>
        </div>
    }
}