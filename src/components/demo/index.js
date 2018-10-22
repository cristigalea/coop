import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import { getGithubInfo, getAddressInfo } from '../../actions/userActions';

import Tabs from '../shared/Tabs';
import NewToBBanking from './NewToBBanking';
import LookingToSwitch from './LookingToSwitch';

class Demo extends Component {

    static propTypes = {
        address: PropTypes.object.isRequired,
        githubData: PropTypes.object.isRequired,
        getAddressInfo: PropTypes.func.isRequired,
        getGithubInfo: PropTypes.func.isRequired
    }

    render() {
        const { address, githubData } = this.props;

        const tabs = [`I'm new to business banking`, `I'm looking to switch`, `I run a charity or social enterprise`, `I'm an existing customer`];

        return (
            <div className={css(styles.wrapper)}>
                <Tabs tabs={tabs}>
                    <NewToBBanking code='M4 3TR' address={address} getAddressInfo={this.props.getAddressInfo} />
                    <LookingToSwitch user='cristigalea' githubData={githubData} getGithubInfo={this.props.getGithubInfo} />
                    <div>Info about the charity</div>
                    <div>Info about the existing customer</div>
                </Tabs>
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

const styles = StyleSheet.create({
    wrapper: {
        marginLeft: '50px',
        marginRight: '50px',
        '@media screen and (max-width: 640px)': {
            marginLeft: '20px',
            marginRight: '20px'
        },
        '@media screen and (max-width: 500px)': {
            marginLeft: 0,
            marginRight: 0
        }
    }
});