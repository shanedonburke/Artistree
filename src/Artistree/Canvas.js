import React from 'react';

import './Canvas.css';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="canvas-root">
                <div className="title-bar">
                    <div>Canvas</div>
                </div>
                <div className="page-body">
                    Canvas
                </div>
            </div>
        );
    }
}
export default Canvas;