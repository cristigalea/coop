import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getGithubInfo, getAddressInfo } from '../actions/userActions'

class Demo extends Component {

    componentDidMount() {
        this.props.getGithubInfo('cristigalea');
        this.props.getAddressInfo('M15 4LG');
    }

    render() {
        const { address, githubData } = this.props;
        return (
            <div>
                <p>{Object.keys(githubData).length ? `Github Search Result: ${JSON.stringify(githubData)}` : ''}</p>
                <p>{Object.keys(address).length ? `Github Search Result: ${JSON.stringify(address)}` : ''}</p>
            </div>
        )
    }
}

export default connect(
    state => ({
        address: state.user.address,
        githubData: state.user.githubData
    }), {
        getGithubInfo, 
        getAddressInfo
    })(Demo);
