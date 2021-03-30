import React from 'react';

import { CanvasTool } from './CanvasTool';
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
                    <div className="canvas-with-tools">
                        <div className="canvas"></div>
                        <div className="tools">
                            <CanvasTool></CanvasTool>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Canvas;