import React from 'react'
import MediumCardComponent from "./MediumCardComponent";
import MediumListComponent from "./MediumListComponent";
import MediumGridHeadComponent from "./MediumGridHeadComponent";

/**
 * xs | 1
 * sm | 2
 * md | 3
 * lg | 4
 * xl | 6
 */
class MediumGridComponent extends MediumListComponent {

    render = () =>
        <div className={""}>
            <div className="ml-2 mr-2">
                <div className="row">
                    {
                        this.sortMedia(this.props.media).map(medium =>
                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2">
                                <MediumCardComponent
                                    medium={medium}
                                    key={medium.id}/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>

}
export default MediumGridComponent
