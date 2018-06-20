import React, {Component}   from 'react';

import Header from './LoginHeader';
import BodySlider from './bodySlide';
import Footer from './Footer';

export default class Homepage extends Component {

    render(){
        return <div>
            <Header/>
            <BodySlider/>
            <Footer/>
        </div>
    }
}