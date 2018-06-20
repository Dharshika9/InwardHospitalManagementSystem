import React, {Component} from 'react';


export default class LoginHeader extends Component{

    constructor(props){
        super(props);


    }


    render(){
        return <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="../index-logo.png" width="40" height="70" alt=""/>
                </a>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <a href="http://localhost:3000/login" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Login</a>
                    </ul>
                </div>
            </div>
        </nav>
    }
}