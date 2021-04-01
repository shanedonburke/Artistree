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
                    <div>My Submissions</div>
                </div>
                <div className="LeavingFeedback-page-body">                 
                <div style={{textAlign:'left'}}><img src={MonkeImage} width="600" height="600" alt="MonkeImage" /></div>   
                </div>

            </div>
        );
    }
}
export default LeavingFeedback;