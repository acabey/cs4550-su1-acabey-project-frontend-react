import React from 'react'

class MediumListComponent extends React.Component {

    state = {
        sortDescription: 'AZ_ASC'
    };

    toggleSort = () => {
        this.setState((prevState) => ({
            sortDescription: prevState.sortDescription === 'AZ_ASC' ? 'AZ_DESC' : 'AZ_ASC'
        }))
    };

    sortMedia = (media) => {
        if (this.state.sortDescription === 'AZ_ASC') {
            return this.sortAZasc(media);
        } else {
            return this.sortAZdesc(media);
        }
    };

    sortAZdesc = (media) => {
        return media.sort((a, b) => a.seriesName.localeCompare(b.seriesName))
    };

    sortAZasc = (media) => {
        return media.sort((a, b) => b.seriesName.localeCompare(a.seriesName))
    };
}


export default MediumListComponent
