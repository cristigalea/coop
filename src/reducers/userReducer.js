import {
    GET_ADDRESS_INFO,
    GET_GITHUB_INFO
} from '../actions/constants';


const initState = {
    address: {},
    githubData: {}
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_GITHUB_INFO:
            return { ...state, githubData: action.payload };
        case GET_ADDRESS_INFO:
            return { ...state, address: action.payload };
        default:
            return state;
    }
};