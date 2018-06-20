'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import reactDOM from 'react-dom';

export default class  Test extends Component {
    static get propTypes() {
        return {
            test: PropTypes.object,
            getTestDetails: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.test = this.props.test;
        this.getTestDetails = this.props.getTestDetails;
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
                <div className="card-header" style={textAlign}>Test ID - {this.test.testId}</div>
                <div className="card-body">


                    <label>Test Type:{this.test.testType} </label><br/>
                    <label>Patient Status:{this.ward.PatientStatus} </label><br/>
                    <label>description:{this.ward.description} </label><br/>
                 {/*/  <button type="button" className="btn btn-info" onClick={(event)=>{this.click(event)}}>MoreDetails</button>*/}
                    {/*<button type="button" className="btn btn-info">View</button>*/}


                </div>



            </div>
        </div>
    }
}

