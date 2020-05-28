import React from 'react'

class CourseListComponent extends React.Component {

    state = {
        sortDescription: 'AZ_ASC'
    };

    toggleSort = () => {
        this.setState((prevState) => ({
            sortDescription: prevState.sortDescription === 'AZ_ASC' ? 'AZ_DESC' : 'AZ_ASC'
        }))
    };

    sortCourses = (courses) => {
        if (this.state.sortDescription === 'AZ_ASC') {
            return this.sortAZasc(courses);
        } else {
            return this.sortAZdesc(courses);
        }
    };

    sortAZdesc = (courses) => {
        return courses.sort((a, b) => a.title.localeCompare(b.title))
    };

    sortAZasc = (courses) => {
        return courses.sort((a, b) => b.title.localeCompare(a.title))
    };
}


export default CourseListComponent
