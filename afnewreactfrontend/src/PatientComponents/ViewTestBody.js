import React , {Component} from 'react';

import axios from 'axios';
import Tests from './maincomponents/Tests';

export default class ViewTestsBody extends Component{


    constructor(props) {
        super(props);
        this.state = {
            tests: []
        }
        this.getTestDetails();
    }
    getTestDetails() {
        axios.get("http://localhost:8081" + '/Test').then(res => {
            this.setState({
                tests: res.data.data || res.data
            });
        })
    }



    render(){
        return <div className="content-wrapper">
            <div className="container-fluid">
                <Tests wards={this.state.tests} getTestDetails = {() => this.getTestDetails()}/>

            </div>
        </div>
    }
}