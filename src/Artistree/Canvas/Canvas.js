import React from "react";
import CanvasDraw from "react-canvas-draw";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";

import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEraser, faFillDrip } from "@fortawesome/free-solid-svg-icons";

import { CanvasTool } from "./CanvasTool";
import "./Canvas.css";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIcon: "Brush",
      displayColorPicker: false,
      color: {
        r: "0",
        g: "0",
        b: "0",
        a: "0",
      },
    };
    library.add(faEraser);
    library.add(faFillDrip);
  }

  render() {
    const styles = reactCSS({
      default: {
        popover: {
          position: "absolute",
          zIndex: "2",
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
      },
    });

    const onSelect = (_, icon) =>
      this.setState({
        ...this.state,
        selectedIcon: icon,
      });

    const toggleColorPicker = (e) => {
      this.setState({
        displayColorPicker: !this.state.displayColorPicker,
      });
      e.stopPropagation();
    };

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
          <div
            className="canvas-with-tools"
            onMouseDown={() => this.setState({ displayColorPicker: false })}
          >
            <CanvasDraw
              className="canvas"
              hideGrid={true}
              brushColor={
                this.state.selectedIcon === "Eraser"
                  ? "white"
                  : `rgb(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b})`
              }
            />
            <div className="canvas-sidebar">
              <div className="tools">
                <CanvasTool
                  selectedIcon={this.state.selectedIcon}
                  onSelect={onSelect}
                  toolName="Brush"
                  iconName="brush"
                  iconClass="material-icons-outlined"
                ></CanvasTool>
                <CanvasTool
                  selectedIcon={this.state.selectedIcon}
                  onSelect={onSelect}
                  toolName="Pencil"
                  iconName="create"
                  iconClass="material-icons-outlined"
                ></CanvasTool>
                <CanvasTool
                  selectedIcon={this.state.selectedIcon}
                  onSelect={onSelect}
                  toolName="Fill"
                  useFontAwesome="true"
                  icon={faFillDrip}
                ></CanvasTool>
                <CanvasTool
                  selectedIcon={this.state.selectedIcon}
                  onSelect={onSelect}
                  toolName="Line"
                  iconName="arrow_right_alt"
                  iconClass="material-icons"
                ></CanvasTool>
                <CanvasTool
                  selectedIcon={this.state.selectedIcon}
                  onSelect={onSelect}
                  toolName="Ellipse"
                  iconName="circle"
                  iconClass="material-icons-outlined"
                ></CanvasTool>
                <CanvasTool
                  selectedIcon={this.state.selectedIcon}
                  onSelect={onSelect}
                  toolName="Rectangle"
                  iconName="crop_16_9"
                  iconClass="material-icons-outlined"
                ></CanvasTool>
                <CanvasTool
                  selectedIcon={this.state.selectedIcon}
                  onSelect={onSelect}
                  toolName="Layers"
                  iconName="layers"
                  iconClass="material-icons-outlined"
                ></CanvasTool>
                <CanvasTool
                  selectedIcon={this.state.selectedIcon}
                  onSelect={onSelect}
                  toolName="Eraser"
                  useFontAwesome="true"
                  icon={faEraser}
                ></CanvasTool>
                <CanvasTool
                  selectedIcon={this.state.selectedIcon}
                  onSelect={onSelect}
                  toolName="Text"
                  iconName="title"
                  iconClass="material-icons"
                ></CanvasTool>
                <CanvasTool
                  selectedIcon="false"
                  onSelect={toggleColorPicker}
                  toolName="Choose Color"
                  iconName="palette"
                  iconClass="material-icons"
                  iconColor={`rgb(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b})`}
                ></CanvasTool>
                {this.state.displayColorPicker ? (
                  <div
                    style={styles.popover}
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    <div style={styles.cover} onMouseDown={toggleColorPicker} />
                    <SketchPicker
                      color={this.state.color}
                      onChange={(color) => this.setState({ color: color.rgb })}
                    />
                  </div>
                ) : null}
                <CanvasTool
                  selectedIcon={this.state.selectedIcon}
                  onSelect={onSelect}
                  toolName="Sample Color"
                  iconName="colorize"
                  iconClass="material-icons"
                ></CanvasTool>
              </div>
              <div className="sidebar-btn-container">
                <Link to="/my-submissions">
                  <button className="canvas-sidebar-btn post-to-canvas-btn">
                    Post to Gallery
                  </button>
                </Link>
                <Link to="/Artistree">
                  <button className="canvas-sidebar-btn discard-btn">
                    Discard
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Canvas;
