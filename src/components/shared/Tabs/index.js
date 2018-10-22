import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

import TabList from './TabList';

export default class Tabs extends Component { 

    static propTypes = {
        tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
        children: PropTypes.any.isRequired
    };

    state = {
        selectedTabIndex: 0
    };

    handleTabChange = index => {
        this.setState({
            selectedTabIndex: index
        });
    }

    render() {
        const { tabs, children } = this.props;
        const { selectedTabIndex } = this.state;

        // in case not enough children are passed
        const content = children[selectedTabIndex] || <div>No content available</div>; 

        return (
            <div>
                <nav>
                    <TabList 
                        tabs={tabs} 
                        selectedTabIndex={selectedTabIndex}
                        handleTabChange={this.handleTabChange}
                    />
                </nav>
                <div className={css(styles.content)}>
                    {content}
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        padding: '20px'
    }
});