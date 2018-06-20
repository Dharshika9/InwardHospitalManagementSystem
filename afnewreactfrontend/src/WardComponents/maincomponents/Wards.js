'use strict';
import React, {Component}   from 'react';
import PropTypes from 'prop-types';
import Ward from './Ward';


class Wards extends Component {
    static get propTypes() {
        return {
            wards: PropTypes.array
        }
    }

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(props) {
        this.setState(props)
    }

    render() {
        this.wards = this.props.wards;
        return <div>

            {

                this.wards.map(ward => {
                    return <Ward key={ward._id || ward.id} ward={ward} getWardDetails={() => this.props.getPatientDetails()}/>
                })
            }

        </div>;
    }
}
export default Wards
