import axios from 'axios';

const API_URL = process.env.REACT_APP_MAIN_API_URL;
// const user = localStorage.getItem('currentUser');

function onSignin(formData) {
    return axios.post(`${API_URL}user/login`, (formData), {
        headers: {
            'content-type': 'application/json'
        }
    })
        .then((response) => {
            if(response.data.accessToken) {
                localStorage.setItem('currentUser', JSON.stringify(response.data))
            }
            return response.data
        })
}

function onSignout() {
    localStorage.clear();
}

function getUserInfo() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

export const AuthService = {
    onSignin,
    getUserInfo,
    onSignout
}
