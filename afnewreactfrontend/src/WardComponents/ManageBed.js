import React , {Component} from 'react';
import axios                from 'axios';


export default class ManageBed extends Component {



    render(){
        var style={width: 400, height: 370}
        var textAlign={textAlign: "center"}
        return<div>
            <div className="card bg-light mb-3 Row" style={style}>
                <div className="card-header" style={textAlign}>Add New Bed</div>
                <div className="card-body">

                    <form>

                        <div className="form-group" >
                            <label>Ward No </label><br/>
                            <select className="form-control">
                                <option>Ward 01</option>
                                <option>Ward 02</option>
                            </select>
                        </div>
                    <label>Number of Beds </label><br/>
                    <input className="form-control" />

                     <label>Number of new Beds </label><br/>
                     <input className="form-control" />
                     <br/>
                     <button type="button" className="btn btn-info" >Add</button>

                    </form>
                </div>



            </div>
            <div className="card bg-light mb-3 Row" style={style}>
                <div className="card-header" style={textAlign}>Delete Bed</div>
                <div className="card-body">

                    <form>


                        <div className="form-group" >
                            <label>Ward No </label><br/>
                            <select className="form-control">
                                <option>Ward 01</option>
                                <option>Ward 02</option>
                            </select>
                        </div>
                        <div className="form-group" >
                            <label>Beds No</label><br/>
                            <select className="form-control">
                                <option>Bed 01</option>
                                <option>Bed 02</option>
                            </select>
                        </div>
                        <br/>
                        <button type="button" className="btn btn-info" >Delete</button>

                    </form>
                </div>



            </div>
        </div>
    }
}