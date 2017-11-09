import React, {Component} from 'react';


class PlayPause extends Component {

    render() {
        if(this.refs.animateRef){
            this.refs.animateRef.beginElement();
            //console.log(this.refs.animateRef);
            //console.log(this.props.fullscreenVideoControls);
            //console.log(this.props.fullscreenVideoControls.playPause);
        }
        const PLAY_PATH="M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28";
        const PAUSE_PATH="M 11 10 L 17 10 L 17 26 L 11 26 M 20 10 L 26 10 L 26 26 L 20 26";
        let x;
        let y;

        if (this.props.fullscreenVideoControls){
            let playPauseData = this.props.fullscreenVideoControls.playPause;
            if(playPauseData==='play'){
                x=PLAY_PATH;
                y=PAUSE_PATH;
            } else if(playPauseData==='pause'){
                y=PLAY_PATH;
                x=PAUSE_PATH;
            }
    }
        return (
            <svg width="100%" height="100%" viewBox="0 0 36 36" version="1.1" fill="white" ref="playPauseSvgRef">
                <path d="M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28"  ref="playPausePathRef">
{                        <animate id="animation"
                             ref="animateRef"
                             attributeType="XML"
                             attributeName="d"
                             from={x}
                             to={y}
                             dur=".0s"
                             begin="indefinite"
                             fill="freeze"
                             repeatCount="1">
                    </animate>}
                </path>
            </svg>
        )
    }
}


export default PlayPause;
