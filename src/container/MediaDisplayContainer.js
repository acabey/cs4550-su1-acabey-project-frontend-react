import React from "react";
import {Container} from "react-bootstrap";
import TVDBClient from "../services/TVDBClient";
import MediumGridComponent from "../components/MediumGridComponent";


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

    render = () =>
        <Container fluid={true}>

            <input type={"text"}
                   className={"form-control"}
                   onChange={
                       event => {this.setState({'searchTitle': event.target.value})}
                   }
                   value={this.state.searchTitle}
            />

            <MediumGridComponent
                media={this.state.media}/>
        </Container>
}

export default MediaDisplayContainer
