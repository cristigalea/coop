import React from 'react';
import {shallow} from 'enzyme';

import LookingToSwitch from './LookingToSwitch';
import { StyleSheetTestUtils} from 'aphrodite';

describe('<LookingToSwitch />', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
      
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it('should match the snapshot', () => {
        const component = shallow(<LookingToSwitch user='cristi' githubData={{}} getGithubInfo={() => {}} />);
        expect(component).toMatchSnapshot();
    });
});