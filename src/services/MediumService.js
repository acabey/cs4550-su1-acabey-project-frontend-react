//const url = 'https://acabey-server-java.herokuapp.com/api';
const url = 'http://localhost:8080/api';

export const createMedium = (userId, medium) =>
    fetch(`${url}/users/${userId}/media`, {
        method: 'POST',
        body: JSON.stringify(medium),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const findMediaForUser = (userId) =>
    fetch(`${url}/users/${userId}/media`)
        .then(response => response.json());

export const findMediumById = (mediumId) =>
    fetch(`${url}/media/${mediumId}`, {
        method: 'GET'
    })
        .then(response => response.json());

export const findAllMedia = (mediumId) =>
    fetch(`${url}/media`, {
        method: 'GET'
    })
        .then(response => response.json());

export const updateMedium = (mediumId, medium) =>
    fetch(`${url}/media/${mediumId}`, {
        method: 'PUT',
        body: JSON.stringify(medium),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteMedium= (mediumId) =>
    fetch(`${url}/media/${mediumId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());


export default {
    createMedium,
    findMediaForUser,
    findMediumById,
    findAllMedia,
    updateMedium,
    deleteMedium
}
