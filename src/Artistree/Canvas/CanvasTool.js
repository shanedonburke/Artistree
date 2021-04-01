import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

import './CanvasTool.css';

export class CanvasTool extends React.Component {
    constructor(props) {
        super(props);
        library.add(faEraser);
    }

    render() {
        return (
            <div className="tool-button">
                { this.props.toolName }
                { this.props.useFontAwesome ?
                    <FontAwesomeIcon icon={faEraser} /> :
                    <span style={{ color: this.props.iconColor || 'black' }} className={this.props.iconClass}>{this.props.iconName}</span>
                }
            </div>
        )
    }
}