import React , {Component} from 'react'
import PropTypes 			from "prop-types";

import {Redirect} from 'react-router-dom';

export default class Loginform extends Component{

    static get propTypes(){
        return{
            userName: PropTypes.string,
            password: PropTypes.string
        }

    }

    constructor(props) {
        super(props);
        this.state = {
            access : false,
            username: ''
        }
    }

    onChangeEmail(event){
        event.preventDefault();
        event.stopPropagation();
        this.email = event.target.value;
        console.log(this.email);
    }

    onChangePassword(event){
        event.preventDefault();
        event.stopPropagation();
        this.password = event.target.value;
        console.log(this.password)
    }

    onSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({username:'ravindu'});
        this.setState({access: true});

    }

    render() {

        if(this.state.access){
            return <Redirect to={{
                pathname: '/viewwards',
                state: { referrer: this.state.username }
            }}/>
        }

        return <div className="containerForm">
            <div className="card card-login mx-auto mt-5">
                <div className="card-header">Login</div>
                <div className="card-body">
                    <form onSubmit={event => {this.onSubmit(event)}}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input className="form-control" id="exampleInputEmail1" type="email"
                                   aria-describedby="emailHelp" placeholder="Enter email" onChange={(event) => this.onChangeEmail(event)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input className="form-control" id="exampleInputPassword1" type="password"
                                   placeholder="Password" onChange={(event) => this.onChangePassword(event)}/>
                        </div>

                        <button className="btn btn-primary btn-block" type="submit">Login</button>
                    </form>
                    <div className="text-center">
                        <a className="d-block small mt-3" href="http://localhost:3000/register">Register an Account</a>

                    </div>
                </div>
            </div>
        </div>
    }
}