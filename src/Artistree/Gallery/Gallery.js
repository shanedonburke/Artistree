import React from 'react';

import { Link } from 'react-router-dom';

import { Button
} from 'reactstrap'

import GalleryPost from './GalleryPost';

import './Gallery.css';

var listOfImages =[];
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

    importAll(r) {
        return r.keys().map(r);
    }

    componentDidMount () {
        listOfImages = this.importAll(require.context('./Memes/', false, /\.(png|jpe?g|svg)$/));

        const grid = this.buildGrid(12);
        this.setState({grid: grid});
    }

    render() {
        return (
            <div className="gallery-root">
                <div className="title-bar gallery-title-bar">
                    <div className="filter-sort title-bar-section-sm">
                        <Button><span className="material-icons title-bar-icon">filter_list</span>Filter</Button>
                        <Button><span className="material-icons-outlined title-bar-icon">arrow_upward</span>Sort</Button>
                    </div>
                    <div className="title-bar-section-lg">Gallery</div>
                    <div className="title-bar-section-sm new-submission-container">
                        <Link to="/canvas">
                            <Button color="primary" className="new-submission-btn">
                                <div className="new-submission-elements">
                                    <span className="material-icons-outlined title-bar-icon">add</span>
                                    <span className="new-submission-text">New Submission</span>
                                </div>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="page-body">
                    {/* {Array.from(this.state.grid).map((idx) => {
                        return (
                            <GalleryPost key={idx}>{idx}</GalleryPost>
                        );
                    })} */}
                    {listOfImages.map(
                      (image, index) => <GalleryPost key={index} image={image.default}>{index}</GalleryPost>
                    )}
                </div>
            </div>
        );
    }
}
export default Gallery;