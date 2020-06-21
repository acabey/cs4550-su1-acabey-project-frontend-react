//const url = 'https://acabey-server-java.herokuapp.com/api';
const url = 'http://localhost:8080/api';

export const createWatchlist = (userId, watchlist) =>
    fetch(`${url}/users/${userId}/watchlists`, {
        method: 'POST',
        body: JSON.stringify(watchlist),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const findWatchlistsForUser = (userId) =>
    fetch(`${url}/users/${userId}/watchlists`)
        .then(response => response.json());

export const findWatchlistById = (watchlistId) =>
    fetch(`${url}/watchlists/${watchlistId}`, {
        method: 'GET'
    })
        .then(response => response.json());

export const findAllWatchlists = (watchlistId) =>
    fetch(`${url}/watchlists`, {
        method: 'GET'
    })
        .then(response => response.json());

export const updateWatchlist = (watchlistId, watchlist) =>
    fetch(`${url}/watchlists/${watchlistId}`, {
        method: 'PUT',
        body: JSON.stringify(watchlist),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteWatchlist= (watchlistId) =>
    fetch(`${url}/watchlists/${watchlistId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());


export default {
    createWatchlist,
    findWatchlistsForUser,
    findWatchlistById,
    findAllWatchlists,
    updateWatchlist,
    deleteWatchlist
}
