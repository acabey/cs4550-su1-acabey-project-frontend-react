class OMDBClient {

    credentials = {
        apikey: 'ff86f785',
    };
    url = new URL(`http://www.omdbapi.com/?apikey=${this.credentials.apikey}`);

    /**
     * Allows the user to search for movies by their title
     */
    searchMoviesByTitle(movieTitle) {
        let searchUrl = this.url;
        searchUrl.append('t', movieTitle);

        return fetch(searchUrl).then((response) => {
            return response.json()
        })
    }

}

export default new OMDBClient()
