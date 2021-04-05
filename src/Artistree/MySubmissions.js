import React from 'react';
import MSlogo from './Gallery/Memes/birdarms.png'

import './MySubmissions.css'

class MySubmissions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="MySubmissions-root">
                <div className="title-bar">
                    <div>My Submissions</div>
                </div>
                <div className="MySubmissions-page-body" style={{textAlign:'left'}}>                    
                    <img src={MSlogo} height="600" width="600" alt="logo"/>
                </div>

            </div>
        );
    }
}
export default MySubmissions;