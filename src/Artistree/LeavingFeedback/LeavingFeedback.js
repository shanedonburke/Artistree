import React from 'react';
import MonkeImage from '../Memes/monke.jpg'

import './LeavingFeedback.css'

class LeavingFeedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="LeavingFeedback-root">
                <div className="title-bar">
                    <div>Critique</div>
                </div>
                <div className="LeavingFeedback-page-body">                    
                    <img src={MonkeImage} height="600" width="600" alt="logo"/>
                </div>

            </div>
        );
    }
}
export default LeavingFeedback;