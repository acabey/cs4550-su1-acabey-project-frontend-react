const url = 'http://localhost:8080/api';

export const login = (username, password) =>
    fetch(`${url}/login`, {
        body: JSON.stringify({
            username: username,
            password: password}),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        credentials: "include"
    }).then(response => response.json());


export const logout = () =>
    fetch(`${url}/logout`, {
        method: 'POST',
        credentials: "include"
    }).then(response => response.json());

export const register = (username, password) =>
    fetch(`${url}/register`, {
        body: JSON.stringify({
            username: username,
            password: password}),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        credentials: "include"
    }).then(response => response.json());

export const getProfile = () =>
    fetch(`${url}/profile`, {
        method: 'GET',
        credentials: "include"
    }).then(response => response.json());

export const updateProfile = (username, updatedUser) =>
    fetch(`${url}/profile/${username}`, {
        body: JSON.stringify(updatedUser),
        headers: {
            'content-type': 'application/json'
        },
        method: 'PUT',
        credentials: "include"
    }).then(response => response.json());


export default {
    login,
    logout,
    register,
    getProfile,
    updateProfile
}
