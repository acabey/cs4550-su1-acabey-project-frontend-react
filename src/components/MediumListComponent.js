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
        if (media.length == 0) {
            return media;
        }
        if (this.state.sortDescription === 'AZ_ASC') {
            return this.sortAZasc(media);
        } else {
            return this.sortAZdesc(media);
        }
    };

    sortAZdesc = (media) => {
        return media.sort((a, b) => {
            if (a.title && b.title) {
                return a.title.localeCompare(b.title)
            } else {
                return 0;
            }
        })
    };

    sortAZasc = (media) => {
        return media.sort((a, b) => {
            if (a.title && b.title) {
                return b.title.localeCompare(a.title)
            } else {
                return 0;
            }
        })
    };
}


export default MediumListComponent
