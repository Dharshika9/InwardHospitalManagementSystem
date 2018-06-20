'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import Bed                from './Bed';

class Beds extends Component{

    static get propTypes() {
        return {
            beds: PropTypes.array
        }
    }

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(props) {
        this.setState(props)
    }

    render(){this.beds = this.props.beds;
        return <div>

            {

                this.beds.map(bed => {
                    return <Bed key={bed._id || bed.id} bed={bed} getBedDetails={() => this.props.getBedDetails()}/>
                })
            }

        </div>;
    }
}

export default Beds;