import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import Demo from './demo'
import Loading from './shared/Loading';

class App extends Component {

    static propTypes = {
        isSpinnerShowing: PropTypes.string
    }

    render() {
        const { isSpinnerShowing } = this.props;

        return (
            <div className={css(styles.wrapper)}>
                {isSpinnerShowing && <Loading />}
                <Demo />
            </div>
        );
    }
}

export default connect(
    state => ({
        isSpinnerShowing: state.layout.isSpinnerShowing
    })
)(App);

const styles = StyleSheet.create({
    wrapper: {
        margin: 0,
        padding: 0,
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen","Ubuntu", 
        "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",sans-serif`,
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale'
    }
});