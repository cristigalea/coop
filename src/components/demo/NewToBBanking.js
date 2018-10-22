import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewToBBanking extends Component {

    static propTypes = {
        code: PropTypes.string.isRequired,
        address: PropTypes.object.isRequired,
        getAddressInfo: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getAddressInfo(this.props.code)
    }

    render() {
        const { address } = this.props;
        return (
            <div>
                {address && address.city ?
                    <p>You live in the city of {address.city} in the {address.region} part of {address.country}</p>
                    : 'No address info'}
            </div>
        )
    }
}