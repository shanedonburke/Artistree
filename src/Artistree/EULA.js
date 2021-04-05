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

                <iframe title="E" width="600" height="600" src="https://www.youtube.com/embed/cGw-8FrRT1E" frameborder="0" allowfullscreen></iframe>

                <textarea className="EULA-scrollabletextbox" name="textbox">
                    Get coconut malled
                    </textarea>                   
                </div>

            </div>
        );
    }
}
export default EULA;