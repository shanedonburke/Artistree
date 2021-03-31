import React from "react";

import './CanvasTool.css';

export class CanvasTool extends React.Component {
    render() {
        return (
            <div className="tool-button">
                {this.props.toolName}
                <span style={{ color: this.props.iconColor || 'black' }} className={this.props.iconClass}>{this.props.iconName}</span>
            </div>
        )
    }
}