import React from 'react';

import './GalleryPost.css';

class GalleryPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="post">
                <div className="image" />
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default GalleryPost;