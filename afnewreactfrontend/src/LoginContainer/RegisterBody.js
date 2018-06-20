import React , {Component} from 'react'
import Registerform from './RegisterForm';
import LoginpageHeader from './LoginpageHeader';

export default class RegisterBody extends Component{
    render(){
        return<div>
            <LoginpageHeader/>
            <Registerform/>

        </div>
    }
}