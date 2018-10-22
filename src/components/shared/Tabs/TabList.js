import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import TabHandle from './TabHandle';

const TabList = ({tabs, selectedTabIndex = 0, handleTabChange}) => {
    const handles = tabs.map((tab, index) => {
        
        return (
            <TabHandle 
                key={`tab-${index}`} 
                onClick={() => handleTabChange(index)} 
                isActive={index === selectedTabIndex}
            >
                {tab}
            </TabHandle>
        );
    })

    return (
        <ul className={css(styles.list)}>
            {handles}
        </ul>
    );
};

TabList.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedTabIndex: PropTypes.number,
    handleTabChange: PropTypes.func.isRequired
}

export default TabList;

const baseColor = '#054f9b';
const tabHeight = 70;

const styles = StyleSheet.create({
    list: {
        listStyle: 'none',
        paddingLeft: 0,
        display: 'flex',
        minHeight: `${tabHeight}px`,
        border: `2px solid ${baseColor}`,
        borderRadius: `${tabHeight/2}px`,
        overflow: 'hidden'
    }
});