import React from 'react';
import {shallow} from 'enzyme';

import NewToBBanking from './NewToBBanking';
import { StyleSheetTestUtils} from 'aphrodite';

describe('<NewToBBanking />', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
      
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it('should match the snapshot', () => {
        const component = shallow(<NewToBBanking code='M4 3TR' address={{}} getAddressInfo={() => {}} />);
        expect(component).toMatchSnapshot();
    });
});