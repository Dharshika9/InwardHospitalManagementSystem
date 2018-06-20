import React , {Component} from 'react';

export default class LoginpageHeader extends Component{
    render(){
        return <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="index-logo.png" width="40" height="70" alt=""/>
                </a>

            </div>
        </nav>
    }
}