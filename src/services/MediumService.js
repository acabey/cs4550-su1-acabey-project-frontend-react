import dummyMedia from "../utils/DummyMediaData";

class MediumService {

    url = 'http://localhost:8080/api';
    //const url = 'https://acabey-server-java.herokuapp.com/api';

    constructor() {
        //this.tvdbClient = new TVDBClient();
        const TVDB = require('node-tvdb');
        this.tvdb = new TVDB('e5094420c444a38c3b46f926de91dde3');
    }

    createMedium = (userId, medium) =>
        fetch(`${this.url}/users/${userId}/media`, {
            method: 'POST',
            body: JSON.stringify(medium),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json());

    findMediaForUser = (userId) =>
        fetch(`${this.url}/users/${userId}/media`)
            .then(response => response.json());

    findMediumById = (mediumId) =>
        fetch(`${this.url}/media/${mediumId}`, {
            method: 'GET'
        })
            .then(response => response.json());

    findAllMedia = (mediumId) =>
        fetch(`${this.url}/media`, {
            method: 'GET'
        })
            .then(response => response.json());

    updateMedium = (mediumId, medium) =>
        fetch(`${this.url}/media/${mediumId}`, {
            method: 'PUT',
            body: JSON.stringify(medium),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json());

    deleteMedium = (mediumId) =>
        fetch(`${this.url}/media/${mediumId}`, {
            method: 'DELETE'
        })
            .then(response => response.json());

    searchMediaByTitle = (title) => {
        return JSON.stringify(dummyMedia)
    };
}


export default new MediumService();
