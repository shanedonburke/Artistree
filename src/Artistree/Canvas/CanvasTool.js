import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './CanvasTool.css';

export class CanvasTool extends React.Component {
    render() {
        return (
            <div className="tool-button">
                { this.props.toolName }
                { this.props.useFontAwesome ?
                    <FontAwesomeIcon icon={this.props.icon} style={{ fontSize: '32px' }} /> :
                    <span style={{ color: this.props.iconColor || 'black' }} className={this.props.iconClass}>{this.props.iconName}</span>
                }
            </div>
        )
    }
}