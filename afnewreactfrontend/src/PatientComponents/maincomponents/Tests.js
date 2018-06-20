'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import Test                from './Test';


class Tests extends Component {
    static get propTypes() {
        return {
            test: PropTypes.array
        }
    }

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(props) {
        this.setState(props)
    }

    render() {
        this.test = this.props.test;
        return <div>





            {

                this.test.map(test => {
                    return <Test key={test._id || test.id} test={test} getTestDetails={() => this.props.getTestDetails()}/>
                })
            }

        </div>;
    }
}
export default Tests
