import { showSpinner, hideSpinner } from './layoutActions';
import { fetchAddressByPostCode } from '../api/addressService';
import { fetchGithubUserInfo } from '../api/githubService';

import {
    GET_ADDRESS_INFO,
    GET_GITHUB_INFO
} from './constants';

const extractAddressInfo = response => ({
    region: response.result && response.result.region,
    country: response.result && response.result.country,
    city: response.result && response.result.admin_district
});

export const getAddressInfo = code => {
    return dispatch => {
        dispatch(showSpinner());
        fetchAddressByPostCode(code).then(response => {
            dispatch({
                type: GET_ADDRESS_INFO,
                payload: extractAddressInfo(response)
            });
            dispatch(hideSpinner());
        }).catch(error => {
            dispatch(hideSpinner());
            console.error(error);
        })
    }
};

const extractGithubInfo = response => ({
    name: response.name,
    company: response.company || 'N/A',
    avatar_url: response.avatar_url,
    url: response.html_url
});

export const getGithubInfo = id => {
    return dispatch => {
        dispatch(showSpinner());
        fetchGithubUserInfo(id).then(response => {
            dispatch({
                type: GET_GITHUB_INFO,
                payload: extractGithubInfo(response)
            });
            dispatch(hideSpinner());
        }).catch(error => {
            dispatch(hideSpinner());
            console.error(error);
        })
    }
};