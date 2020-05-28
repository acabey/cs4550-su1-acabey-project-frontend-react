"use strict";
class CourseServiceClient {

    url = 'https://wbdv-generic-server.herokuapp.com/api';
    nuid = '001867846';
    endpoint = 'courses';

    /**
     * creates a new course instance and adds it to the collection of courses
     * POST - Create
     * @param course
     * @returns {Promise<any>}
     */
    createCourse(course) {
        return fetch(`${this.url}/${this.nuid}/${this.endpoint}`, {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => {
            return response.json()
        })
    }

    /**
     * retrieves all course instances as an array of courses
     * GET - Read
     * @returns {Promise<any>} Array of JSON course objects
     */
    findAllCourses() {
        return fetch(`${this.url}/${this.nuid}/${this.endpoint}`)
            .then((response) => {
                return response.json()
            })
    }

    /**
     * retrieves a course instance that matches the id parameter
     * @param courseId
     * @returns {Promise<any>} the course with the given ID
     */
    findCourseById(courseId) {
        return fetch(`${this.url}/${this.nuid}/${this.endpoint}/${courseId}`)
            .then((response) => {
                return response.json()
            })
    }

    /**
     * updates the course instance whose id matches the id parameter. Updates the instance with values in course parameter
     * @param courseId
     * @param course "object" containing the fields of course to be updated
     * @returns {Promise<any>} the updated course object
     */
    updateCourse(courseId, course) {
        return fetch(`${this.url}/${this.nuid}/${this.endpoint}/${courseId}`, {
            method: 'PUT',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => {
            return response.json()
        })
    }

    /**
     * deletes course instance whose id matches the id parameter
     * @param courseId
     * @returns {Promise<any>} the deleted course object
     */
    deleteCourse(courseId) {
        return fetch(`${this.url}/${this.nuid}/${this.endpoint}/${courseId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => {
            return response.json()
        })
    }


}

export default CourseServiceClient
