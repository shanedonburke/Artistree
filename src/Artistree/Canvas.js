import React from 'react';

import './Canvas.css';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="title-bar">
                    <div>Canvas</div>
                </div>
                <div>
                    Canvas
                </div>
            </div>
        );
    }
}
export default Canvas;