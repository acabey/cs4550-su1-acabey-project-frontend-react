import React from 'react'
import MediumGridCardComponent from "./MediumGridCardComponent";
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
        <div>

            <MediumGridHeadComponent sortState={this.state.sortDescription}
                                     toggleSort={this.toggleSort}
                                     toggleLayout={this.props.toggleLayout}/>

            <div className="ml-2 mr-2">
                <div className="row">
                    {
                        this.sortMedia(this.props.media).map(medium =>
                            <MediumGridCardComponent
                                medium={medium}
                                deleteMedium={this.props.deleteMedium}
                                updateMedium={this.props.updateMedium}
                                key={medium._id}/>
                        )
                    }
                </div>
            </div>
        </div>

}
export default MediumGridComponent