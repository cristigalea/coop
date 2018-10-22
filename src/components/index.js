import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import Demo from './Demo'
import Loading from './shared/Loading';



class App extends Component {
    render() {
        const { isSpinnerShowing } = this.props;

        return (
            <div className={css(styles.wrapper)}>
                {isSpinnerShowing && <Loading message="Content is loading"/>}
                <Loading message="Content is loading"/>
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