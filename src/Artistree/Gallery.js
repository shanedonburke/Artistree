import React from 'react';

import GalleryPost from './GalleryPost';

import './Gallery.css';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = { grid: [] };
    }

    buildGrid(size) {
        const grid = [];
        for (let i = 0; i < size; i++) grid.push(i);
        return grid;
    }

    componentDidMount () {
        const grid = this.buildGrid(10);
        this.setState({grid: grid});
    }

    render() {
        return (
            <div className="gallery-root">
                <div className="title-bar">
                    <div>Gallery</div>
                </div>
                <div className="page-body">
                    {Array.from(this.state.grid).map((idx) => {
                        return (
                            <GalleryPost key={idx}>{idx}</GalleryPost>
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default Gallery;