import React from 'react';
import {shallow} from 'enzyme';

import TabList from './TabList';
import { StyleSheetTestUtils} from 'aphrodite';

describe('<TabList />', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
      
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it('should match the snapshot', () => {
        const component = shallow(<TabList tabs={['Tab1', 'Tab2', 'Tab3']} selectedTabIndex={1} handleTabChange={()=>{}} />);
        expect(component).toMatchSnapshot();
    });
});