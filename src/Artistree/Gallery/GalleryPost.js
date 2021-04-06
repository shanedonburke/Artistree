import React from 'react';

import { Link } from 'react-router-dom';

import './GalleryPost.css';

class GalleryPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="post">
                <Link to={{
                    pathname: "/leave-feedback",
                    state: { image: this.props.image }
                }}><img className="image" src={this.props.image} alt="Galley Post" /></Link>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default GalleryPost;