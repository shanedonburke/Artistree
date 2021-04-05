import React from 'react';

import { Link } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEraser, faFillDrip } from "@fortawesome/free-solid-svg-icons";

import { CanvasTool } from './CanvasTool';
import drawing from '../Gallery/Memes/canvas_drawing.jpg';
import './Canvas.css';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDrawing: false,
            selectedIcon: 'Brush'
        };
        library.add(faEraser);
        library.add(faFillDrip);
    }

    render() {
        const onSelect = (icon) => this.setState({
            ...this.state,
            selectedIcon: icon
        });

        return (
            <div className="canvas-root">
                <div className="title-bar">
                    <div>Canvas</div>
                </div>
                <div className="page-body">
                    <div className="zoom-controls">
                        <span className="material-icons">zoom_in</span>
                        <span className="material-icons">zoom_out</span>
                    </div>
                    <div className="canvas-with-tools">
                        <div className="canvas" onClick={() => this.setState({ showDrawing: true })}>
                            { this.state.showDrawing ? <img src={drawing} className="canvas-drawing" alt="Drawing" /> : null }
                        </div>
                        <div className="canvas-sidebar">
                            <div className="tools">
                                <CanvasTool selectedIcon={this.state.selectedIcon} onSelect={onSelect} toolName="Brush" iconName="brush" iconClass="material-icons-outlined"></CanvasTool>
                                <CanvasTool selectedIcon={this.state.selectedIcon} onSelect={onSelect} toolName="Pencil" iconName="create" iconClass="material-icons-outlined"></CanvasTool>
                                <CanvasTool selectedIcon={this.state.selectedIcon} onSelect={onSelect} toolName="Fill" useFontAwesome="true" icon={faFillDrip}></CanvasTool>
                                <CanvasTool selectedIcon={this.state.selectedIcon} onSelect={onSelect} toolName="Line" iconName="arrow_right_alt" iconClass="material-icons"></CanvasTool>
                                <CanvasTool selectedIcon={this.state.selectedIcon} onSelect={onSelect} toolName="Ellipse" iconName="circle" iconClass="material-icons-outlined"></CanvasTool>
                                <CanvasTool selectedIcon={this.state.selectedIcon} onSelect={onSelect} toolName="Rectangle" iconName="crop_16_9" iconClass="material-icons-outlined"></CanvasTool>
                                <CanvasTool selectedIcon={this.state.selectedIcon} onSelect={onSelect} toolName="Layers" iconName="layers" iconClass="material-icons-outlined"></CanvasTool>
                                <CanvasTool selectedIcon={this.state.selectedIcon} onSelect={onSelect} toolName="Eraser" useFontAwesome="true" icon={faEraser}></CanvasTool>
                                <CanvasTool selectedIcon={this.state.selectedIcon} onSelect={onSelect} toolName="Text" iconName="title" iconClass="material-icons"></CanvasTool>
                                <CanvasTool selectedIcon={this.state.selectedIcon} onSelect={onSelect} toolName="Choose Color" iconName="palette" iconClass="material-icons" iconColor="red"></CanvasTool>
                                <CanvasTool selectedIcon={this.state.selectedIcon} onSelect={onSelect} toolName="Sample Color" iconName="colorize" iconClass="material-icons"></CanvasTool>
                            </div>
                            <div className="sidebar-btn-container">
                                <Link to="/my-submissions"><button className="canvas-sidebar-btn post-to-canvas-btn">Post to Gallery</button></Link>
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