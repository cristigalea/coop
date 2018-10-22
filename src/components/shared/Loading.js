import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default ({message = 'Loading...'}) => (
    <div className={css(styles.wrapper)}>{message}</div>
)

const styles = StyleSheet.create({
    wrapper: {
        fontSize: '20px'
    }
});