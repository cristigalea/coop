import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, css } from 'aphrodite';

const TabHandle = ({isActive = false, onClick, children}) => {
    const className = isActive ? css(styles.handle, styles.handleActive) : css(styles.handle);
    return <li onClick={onClick} className={className}>{children}</li>;
}

TabHandle.propTypes = {
    isActive: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired
}

export default TabHandle;

const baseColor = '#054f9b';
const accentColor = '#fff';

const styles = StyleSheet.create({
    handle: {
        flex: 1,
        fontSize: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        cursor: 'pointer',
        color: baseColor,
        borderLeft: `2px solid ${baseColor}`,
        ':first-of-type': {
            borderLeft: 0
        },
        '@media screen and (max-width: 640px)': {
            fontSize: '12px'
        },
        '@media screen and (max-width: 500px)': {
            fontSize: '10px'
        }
    },
    handleActive: {
        backgroundColor: baseColor,
        color: accentColor
    }
});