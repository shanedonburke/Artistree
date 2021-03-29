import React from 'react';

import NavBar from './NavBar';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <NavBar />
            </div>
        );
    }
}
export default Gallery;