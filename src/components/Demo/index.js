import React, {Component} from 'react';
import { connect } from 'react-redux';

class Demo extends Component {

    render() {
        return (
            <div>Content will go here</div>
        )
    }
}

export default connect(
    state => ({

    }), {}
)(Demo);