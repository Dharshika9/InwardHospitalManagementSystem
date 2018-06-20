import React , {Component} from 'react';
import axios                from 'axios';
import FormManageWard from "./FormManageWard";

export default class SearchManageWard extends Component {


    constructor(props) {
        super(props);
        this.state= {
            ward: []
        }

        this.getSpecificWard=this.getSpecificWard.bind(this);

    }


    getSpecificWard=function(event){
        event.preventDefault();
        event.stopPropagation();
        const wardNo=event.target.elements.wardNo.value;
        axios.get('http://localhost:8081/wards/get_specific_ward/'+wardNo).then(res =>{
            this.setState({
                ward:res.data[0]
            })

            console.log(this.state.ward);

        }).catch((err)=>{
            console.log(err);
        });

    }
    // componentWillReceiveProps(props){
    //    this.setState(props);
    // }

    render() {
        var style={width: 300}
        var textAlign={textAlign: "center"}


        return (
            <div className="row">
                <div className="col-lg-4">
                    <div className="panel panel-default">
                        <div className="panel-heading" style={textAlign}>
                            Manage Wards
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-10">
                                    <div className="ward-main ">


                                        <form onSubmit={event => this.getSpecificWard(event)} role="form">
                                            <div className="form-group">
                                                <label>Enter Ward No : </label>
                                                <input className="form-control-new" placeholder="Enter text" name="wardNo"/>
                                            </div>
                                            <button type="submit" className="btn btn-info">View Details</button>

                                        </form>

                                     </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <FormManageWard ward={this.state.ward}/>


            </div>
        )
    }
}