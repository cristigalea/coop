import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LookingToSwitch extends Component {

    static propTypes = {
        user: PropTypes.string.isRequired,
        githubData: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getGithubInfo(this.props.user)
    }

    render() {
        const { githubData } = this.props;
        return (
            <div>
                {githubData && githubData.name ?
                    <p>Your name is {githubData.name} and your github profie can be found <a href={githubData.url}>here</a></p>
                    : 'No github info'}
            </div>
        )
    }
}