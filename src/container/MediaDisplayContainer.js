import React from "react";
import {Container} from "react-bootstrap";
import TVDBClient from "../services/TVDBClient";
import MediumGridComponent from "../components/MediumGridComponent";
import NavComponent from "../components/NavComponent";


class MediaDisplayContainer extends React.Component {

    state = {
        layout: this.props.match.params.layout,
        media: [],
        searchTitle: ''
    };


    constructor(props) {
        super(props);

        this.tvdbClient = new TVDBClient();
    }

    componentDidMount = () => {
        //this.tvdbClient.findAllCourses()
        //    .then(actualArrayOfCourses =>
        //        this.setState({
        //            courses: actualArrayOfCourses
        //        }))
    };

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if(prevProps.match.params.layout !== this.props.match.params.layout) {
            this.setState({
                layout: this.props.match.params.layout
            })
        }
    };

    searchButtonInputHandler = () => {
        this.setState((prevState) => (
            {
                'media': this.tvdbClient.searchSeries(prevState.searchTitle)
            })
        )
    };

    render = () =>
        <Container fluid={true}>

            <NavComponent searchTitleInputHandler={event => {this.setState({'searchTitle': event.target.value})}}
                          searchButtonInputHandler={this.searchButtonInputHandler}/>

            <MediumGridComponent
                media={this.state.media}/>
        </Container>
}

export default MediaDisplayContainer
