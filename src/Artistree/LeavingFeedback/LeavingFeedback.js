import React from 'react';
import { useLocation } from 'react-router-dom';

import './LeavingFeedback.css'

export default function LeavingFeedback() {
    const { state } = useLocation();

    return (
        <div className="LeavingFeedback-root">
            <div className="title-bar">
                <div>Critique</div>
            </div>
            <div className="LeavingFeedback-page-body">                 
            <div style={{textAlign:'left'}}><img src={state.image} width="600" height="600" alt="MonkeImage" /></div>   
            </div>

        </div>
    );
}