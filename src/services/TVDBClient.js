class TVDBClient {

    url = 'https://api.thetvdb.com';
    credentials = {
        apikey: 'e5094420c444a38c3b46f926de91dde3',
        userkey: '5ED01E4096DD78.63651277',
        username: 'acabey',
    };

    token = '';

    constructor() {
        this.login();
    }

    /**
     * POST - Create
     *
     * Returns a session token to be included in the rest of the requests. Note that API key authentication is required
     * for all subsequent requests and user auth is required for routes in the User section
     * Sets ephemeral API token for future requests
     */
    login() {
        return fetch(`${this.url}/login`, {
            method: 'POST',
            body: JSON.stringify(this.credentials),
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => {
            return response.json()
        }).then((tokenResponse) => {
            this.token = tokenResponse['token']
        });
    }

    /**
     *
     * @returns {Promise<any>} Array of JSON course objects
     */
    findTopSeries() {
        return [];
    }

    /**
     * Allows the user to search for a series based on the following parameters.
     * @returns {Promise<any>} Array of JSON course objects
     */
    searchSeries(series) {
        return fetch(`${this.url}/series`, {
            method: 'POST',
            body: JSON.stringify(
                {
                    name: series
                }
            ),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        }).then((response) => {
            return response.json()
        })
    }

}

export default TVDBClient
