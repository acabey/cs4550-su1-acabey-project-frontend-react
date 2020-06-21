const url = 'https://acabey-server-java.herokuapp.com/api';
//const url = 'http://localhost:8080/api';

export const createWidget = (topicId, widget) =>
    fetch(`${url}/topics/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const findWidgetsForTopic = (topicId) =>
    fetch(`${url}/topics/${topicId}/widgets`)
        .then(response => response.json());

export const findWidget = (widgetId) =>
    fetch(`${url}/widgets/${widgetId}`, {
        method: 'GET'
    })
        .then(response => response.json());

export const updateWidget = (widgetId, widget) =>
    fetch(`${url}/widgets/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteWidget= (widgetId) =>
    fetch(`${url}/widgets/${widgetId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());


export default {
    createWidget,
    findWidgetsForTopic,
    findWidget,
    updateWidget,
    deleteWidget
}
