import React , {Component} from 'react';

export default class Wardmainbody extends Component{
    render(){
        return <div className="content-wrapper">
            <div className="container-fluid">
                I am here
                {console.log(this.props.referrer)}
            </div>
        </div>
    }
}