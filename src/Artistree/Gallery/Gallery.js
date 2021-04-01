import React from 'react';

import { Button
} from 'reactstrap'

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
        const grid = this.buildGrid(12);
        this.setState({grid: grid});
    }

    render() {
        return (
            <div className="gallery-root">
                <div className="title-bar">
                    <div className="filter-sort">
                        <Button><span class="material-icons filter-icon">filter_list</span>Filter</Button>
                        <Button><span class="material-icons-outlined sort-icon">arrow_upward</span>Sort</Button>
                    </div>
                    <div>Gallery</div>
                    <Button>+ New Submission</Button>
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