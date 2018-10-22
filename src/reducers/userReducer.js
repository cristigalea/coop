import {
    TEST
} from '../actions/constants';


const initState = {
    address: {},
    githubData: {}
};

export default (state = initState, action) => {
    switch (action.type) {
        case TEST:
            return state;
        default:
            return state;
    }
};