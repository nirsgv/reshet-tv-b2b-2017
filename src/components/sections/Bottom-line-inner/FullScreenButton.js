/**
 * Created by user on 10/06/2017.
 */
import React, { Component } from 'react';

class FullScreenButton extends Component {
    componentDidUpdate(){
        
    }

    render() {
        const FULL_SCREEN_TXT = 'מסך מלא';

        return (
            <div className="full-screen-button-wrp">
                <button className="full-screen-button"
                        onClick={this.props.toggleBottomLineGallery.bind(this,true)}
                >
                    <span className="txt">
                      {FULL_SCREEN_TXT}
                    </span>
                </button>
            </div>
        );
    }
}


export default FullScreenButton;




