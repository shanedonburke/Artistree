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
                            <CanvasTool toolName="Brush" iconName="brush" iconClass="material-icons-outlined"></CanvasTool>
                            <CanvasTool toolName="Pencil" iconName="create" iconClass="material-icons-outlined"></CanvasTool>
                            <CanvasTool toolName="Choose Color" iconName="palette" iconClass="material-icons" iconColor="red"></CanvasTool>
                            <CanvasTool toolName="Fill" iconName="format_color_fill" iconClass="material-icons-outlined"></CanvasTool>
                            <CanvasTool toolName="Text" iconName="title" iconClass="material-icons"></CanvasTool>
                            <CanvasTool toolName="Line" iconName="arrow_right_alt" iconClass="material-icons"></CanvasTool>
                            <CanvasTool toolName="Ellipse" iconName="circle" iconClass="material-icons-outlined"></CanvasTool>
                            <CanvasTool toolName="Rectangle" iconName="crop_16_9" iconClass="material-icons-outlined"></CanvasTool>
                            <CanvasTool toolName="Layers" iconName="layers" iconClass="material-icons-outlined"></CanvasTool>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Canvas;