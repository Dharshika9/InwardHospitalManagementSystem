import React , {Component} from 'react'
import PropTypes 			from "prop-types";
import axios from 'axios';

const newAPI = require('../static.Config');

export default class RegisterForm extends Component{
    static get propTypes(){
        return{
            name : PropTypes.string,
            userName: PropTypes.string,
            email: PropTypes.string,
            password: PropTypes.string,
            confpassword: PropTypes.string
        }

    }

    constructor(props) {
        super(props);
    }


    onChangeName(event){
        event.preventDefault();
        event.stopPropagation();
        this.name = event.target.value;

    }

    onChangeUsername(event){
        event.preventDefault();
        event.stopPropagation();
        this.userName = event.target.value;

    }
    onChangeEmail(event){
        event.preventDefault();
        event.stopPropagation();
        this.email = event.target.value;
    }
    onChangePassword(event){
        event.preventDefault();
        event.stopPropagation();
        this.password = event.target.value;
    }
    onChangeConfpassword(event){
        event.preventDefault();
        event.stopPropagation();
        this.confpassword = event.target.value;
    }

    onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(this.name);
        console.log(this.userName);
        console.log(this.email);
        console.log(this.password);
        axios.post(newAPI.nodeAPI+'/user/' , {
            name: this.name,
            username: this.userName,
            email: this.email,
            password: this.password,
            confpassword: this.confpassword
        }).then(res =>{
            if(res.status === 200){
                alert('User Registered !');
            }else{
                alert('Failed to Register !');
            }
        }).catch(err =>{
            console.log('Error :' + err);
        })
    }


    render(){
        return<div className="containerRegister">
            <div className="card card-register mx-auto mt-5">
                <div className="card-header">Register an Account</div>
                <div className="card-body">
                    <form onSubmit={event => this.onClick(event)}>
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col-md-6">
                                    <label htmlFor="exampleInputName">Name</label>
                                    <input className="form-control" id="exampleInputName" type="text"
                                           aria-describedby="nameHelp" placeholder="Enter name" onChange={(event) => this.onChangeName(event)}/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="exampleInputLastName">User Name</label>
                                    <input className="form-control" id="exampleInputLastName" type="text"
                                           aria-describedby="nameHelp" placeholder="Enter user name" onChange={(event) => this.onChangeUsername(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input className="form-control" id="exampleInputEmail1" type="email"
                                   aria-describedby="emailHelp" placeholder="Enter email" onChange={(event) => this.onChangeEmail(event)}/>
                        </div>
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col-md-6">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input className="form-control" id="exampleInputPassword1" type="password"
                                           placeholder="Password" onChange={(event) => this.onChangePassword(event)}/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="exampleConfirmPassword">Confirm password</label>
                                    <input className="form-control" id="exampleConfirmPassword" type="password"
                                           placeholder="Confirm password" onChange={(event) => this.onChangeConfpassword(event)}/>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block" type="submit">Register</button>
                    </form>
                    <div className="text-center">
                        <a className="d-block small mt-3" href="http://localhost:3000/login">Login Page</a>

                    </div>
                </div>
            </div>
        </div>
    }
}