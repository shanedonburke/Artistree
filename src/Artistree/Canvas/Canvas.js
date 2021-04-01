import React from 'react';

import { Link } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

import { CanvasTool } from './CanvasTool';
import drawing from '../Memes/canvas_drawing.jpg';
import './Canvas.css';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDrawing: false
        };
        library.add(faEraser);
    }

    drawImage() {

    }

    render() {
        return (
            <div className="canvas-root">
                <div className="title-bar">
                    <div>Canvas</div>
                </div>
                <div className="page-body">
                    <div className="canvas-with-tools">
                        <div className="canvas" onClick={() => this.setState({ showDrawing: true })}>
                            { this.state.showDrawing ? <img src={drawing} className="canvas-drawing" alt="Drawing" /> : null }
                        </div>
                        <div className="canvas-sidebar">
                            <div className="tools">
                                <CanvasTool toolName="Brush" iconName="brush" iconClass="material-icons-outlined"></CanvasTool>
                                <CanvasTool toolName="Pencil" iconName="create" iconClass="material-icons-outlined"></CanvasTool>
                                <CanvasTool toolName="Fill" iconName="format_color_fill" iconClass="material-icons-outlined"></CanvasTool>
                                <CanvasTool toolName="Line" iconName="arrow_right_alt" iconClass="material-icons"></CanvasTool>
                                <CanvasTool toolName="Ellipse" iconName="circle" iconClass="material-icons-outlined"></CanvasTool>
                                <CanvasTool toolName="Rectangle" iconName="crop_16_9" iconClass="material-icons-outlined"></CanvasTool>
                                <CanvasTool toolName="Choose Color" iconName="palette" iconClass="material-icons" iconColor="red"></CanvasTool>
                                <CanvasTool toolName="Layers" iconName="layers" iconClass="material-icons-outlined"></CanvasTool>
                                <CanvasTool toolName="Text" iconName="title" iconClass="material-icons"></CanvasTool>
                                <CanvasTool toolName="Eraser" useFontAwesome="true" icon={faEraser}></CanvasTool>
                            </div>
                            <div className="sidebar-btn-container">
                                <button className="canvas-sidebar-btn post-to-canvas-btn">Post to Gallery</button>
                                <Link to="/"><button className="canvas-sidebar-btn discard-btn">Discard</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Canvas;