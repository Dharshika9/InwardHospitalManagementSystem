import React , {Component} from 'react';


export default class WardNavigation extends Component{


    render(){
        return<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <a className="navbar-brand" href="index.html">Bed Management</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">

                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="View Bed Details">
                        <a className="nav-link" href="http://localhost:3000/viewBeds">
                            <i className="fa fa-fw fa-area-chart"></i>
                            <span className="nav-link-text">Patients' Bed Details</span>
                        </a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Ward Addmisssion">
                        <a className="nav-link" href="http://localhost:3000/regPatient">
                            <i className="fa fa-fw fa-table"></i>
                            <span className="nav-link-text">Register Patients</span>
                        </a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="view wards">
                        <a className="nav-link" href="http://localhost:3000/viewwards">
                            <i className="fa fa-fw fa-link"></i>
                            <span className="nav-link-text">Admit patients</span>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav sidenav-toggler">
                    <li className="nav-item">
                        <a className="nav-link text-center" id="sidenavToggler">
                            <i className="fa fa-fw fa-angle-left"></i>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                        <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                            <i className="fa fa-fw fa-sign-out"></i>Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    }

}