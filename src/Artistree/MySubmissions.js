import React from 'react';
import MSlogo from './artistree_logo.png'

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
                <div className="MySubmissions-page-body">                    
                    <img src={MSlogo} className = "MySubmissions-logo" alt="logo"/>
                </div>

            </div>
        );
    }
}
export default MySubmissions;