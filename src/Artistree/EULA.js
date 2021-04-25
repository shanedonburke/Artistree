import React from 'react';

import './EULA.css'

class EULA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="EULA-root">
                <div className="title-bar">
                    <div>EULA</div>
                </div>  
                <div className="EULA-page-body" style={{textAlign:'center'}}>
                    
                    <div style={{textAlign:'center'}}>
                        User Guidelines
                        <text>
                            <br></br>
                            1. Leave constructive feedback.
                            <br></br>
                            2. Avoid inappropriate comments.    
                            <br></br>
                            3. If a post is inappropriate, it may be reported using the report button.
                            <br></br>
                            4. Harmful comments are subject to removal.
                            <br></br>
                            5. Amogus
                        </text>
                    </div>
                             
                </div>

            </div>
        );
    }
}
export default EULA;