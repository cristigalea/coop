import React from 'react';
import {shallow} from 'enzyme';

import Tabs from './';
import { StyleSheetTestUtils} from 'aphrodite';

describe('<Tabs />', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
      
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it('should match the snapshot', () => {
        const component = shallow(<Tabs tabs={['Tab1', 'Tab2']}><div>Tab1</div><div>Tab2</div></Tabs>);
        expect(component).toMatchSnapshot();
    });
});