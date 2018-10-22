import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const Loading = ({message = 'Loading...'}) => (
    <div className={css(styles.wrapper)}>{message}</div>
);

Loading.propTypes = {
    message: PropTypes.string.isRequired
};

export default Loading;

const styles = StyleSheet.create({
    wrapper: {
        fontSize: '20px',
        position: 'absolute',
        backgroundColor: '#fff',
        paddingTop: '100px',
        textAlign: 'center',
        opacity: 0.7,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
});