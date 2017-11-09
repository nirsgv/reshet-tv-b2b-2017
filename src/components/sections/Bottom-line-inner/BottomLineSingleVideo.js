/**
 * Created by user on 10/06/2017.
 */
import React, { Component } from 'react';

class BottomLineSingleVideo extends Component {

    render() {
        let currentlyOn = this.props.fullStateData.bottomLineSingleVideo.currentlyRunning,
            vidElem,
            backBtn,
            webm,
            completePresentation,
            mp4,
            poster,
            onBinary = currentlyOn ? 'active'  :  'disabled' ;
        if(this.props.fullStateData.bottomLineSingleVideo){
            webm=this.props.fullStateData.bottomLineSingleVideo.webm;
            mp4=this.props.fullStateData.bottomLineSingleVideo.mp4;
            poster=this.props.fullStateData.bottomLineSingleVideo.poster;
        }
        if(currentlyOn){
            vidElem=
                <video
                    allowFullScreen
                    controls
                    autoPlay
                    poster={poster}
                    ref="smallTasteVidRef"
                    className={`bottom-line-single-video-inner-video ${onBinary} enlarge-animate`}>
                    <source
                        src={webm}
                        type="video/webm"/>
                    <source
                        src={mp4}
                        type="video/mp4"/>
                </video>;
            backBtn =
                <div
                    className={`back-button fade-animate`}
                    onClick={this.props.switchBottomLineSingleVideoDisplay.bind(this,false)}
                >
                </div>;
        }
        if(this.props.fullStateData.bottomLineSingleVideo.currentlyRunning){
            completePresentation =
            <div className="bottom-line-single-video">
                <div className={`dark-bkg ${onBinary}`}></div>
                {vidElem}
                {backBtn}
            </div>
        }
        return (
            <div className = "bottom-line-single-video-holder">
                {completePresentation}
            </div>

        )
    }
}


export default BottomLineSingleVideo;




