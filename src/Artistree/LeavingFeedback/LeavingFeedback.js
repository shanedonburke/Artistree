import React from 'react';

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
                    <div>LeavingFeedback</div>
                </div>
            </div>
        );
    }
}
export default LeavingFeedback;