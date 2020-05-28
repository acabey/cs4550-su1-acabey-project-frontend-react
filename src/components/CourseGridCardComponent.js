import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faPencilAlt, faCheck, faBan, faFile} from '@fortawesome/free-solid-svg-icons'
import CourseListCourseComponent from "./CourseListCourseComponent";
import {Link} from "react-router-dom";

class CourseGridCardComponent extends CourseListCourseComponent {

    render = () =>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2">
            <div className={`card ${this.state.isSelected && 'bg-primary'}`}
                onClick={() => this.toggleSelected()}>
                <img className="card-img-top"
                     src="https://cdn1.vox-cdn.com/thumbor/ACMo0hMhU4VOlg-nbzMwBZ0o5lw=/3x0:1279x851/1280x854/cdn0.vox-cdn.com/uploads/chorus_image/image/49034521/B12.0.0.png"
                     alt="Card image cap"/>
                <div className="card-body">
                    {!this.state.isEditing &&
                        <div>
                            <Link to={`/editor/${this.props.course._id}`}
                                  className={"text-dark"}>
                                <FontAwesomeIcon icon={faFile} className={"wbdv-row wbdv-icon mr-2"}/>
                                <span className="card-title">{this.props.course.title}</span>
                            </Link>
                        </div>
                    }
                    {this.state.isEditing &&
                        <input
                            type={"text"}
                            placeholder={"New course title"}
                            value={this.state.updatedTitle}
                            className={'form-control'}
                            onChange={(event) => this.updateTitleEventHandler(event)}/>
                    }
                    <p className="card-text">{`Modified ${this.props.course.modified}`}</p>

                    {!this.state.isEditing &&
                        <div>
                            <button onClick={(event) => this.toggleEditing()}
                                    className="btn wbdv-button wbdv-edit float-left">
                                <FontAwesomeIcon icon={faPencilAlt}/>
                            </button>
                            <button onClick={(event) => this.props.deleteCourse(this.props.course)}
                                    className="btn wbdv-button wbdv-delete float-right">
                                <FontAwesomeIcon icon={faTrash}/>
                            </button>
                        </div>
                    }
                    {this.state.isEditing &&
                    <div>
                        <button onClick={(event) => this.cancelCourseChanges()}
                                className="btn wbdv-button wbdv-edit float-left">
                            <FontAwesomeIcon icon={faBan}/>
                        </button>
                        <button onClick={(event) => this.saveCourseChanges()}
                                className="btn wbdv-button wbdv-delete float-right">
                            <FontAwesomeIcon icon={faCheck}/>
                        </button >
                    </div>
                    }
                </div>
            </div>
        </div>
}


export default CourseGridCardComponent
