import React , {Component} from 'react';

import axios from 'axios';
import Wards from './maincomponents/Wards';

export default class ViewWardsBody extends Component{


    constructor(props) {
        super(props);
        this.state = {
            wards: []
        }
        this.getWardDetails();
    }
    getWardDetails() {
        axios.get("http://localhost:8081" + '/wards').then(res => {
            this.setState({
                wards: res.data.data || res.data
            });
        })
    }



    render(){
        return <div className="content-wrapper">
            <div className="container-fluid">
                <Wards wards={this.state.wards} getWardDetails = {() => this.getWardDetails()}/>

            </div>
        </div>
    }
}