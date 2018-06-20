import React , {Component} from 'react'
import Header from './LoginpageHeader'
import Login from './Loginform'

export default class Loginbody extends Component{
    render(){
        return<div>
            <Header/>
            <Login/>
        </div>

    }
}