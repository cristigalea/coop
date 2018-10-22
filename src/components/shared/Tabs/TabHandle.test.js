import React from 'react';
import {shallow} from 'enzyme';

import TabHandle from './TabHandle';
import { StyleSheetTestUtils} from 'aphrodite';

describe('<TabHandle />', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
      
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it('should match the snapshot for default tabs', () => {
        const component = shallow(<TabHandle onClick={() =>{}}>Some Text</TabHandle>);
        expect(component).toMatchSnapshot();
    });
    it('should match the snapshot for active tabs', () => {
        const component = shallow(<TabHandle isActive={true} onClick={() =>{}}>Some Text</TabHandle>);
        expect(component).toMatchSnapshot();
    });
});