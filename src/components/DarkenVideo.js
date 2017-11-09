/**
 * Created by user on 10/06/2017.
 */
import React, { Component } from 'react';

class DarkenVideo extends Component {
    videoChangeFX(){
       this.props.videoChangeFX(false);

    }
    render() {
    const currentlyRunning = this.props.fullStateData.darkenLayer.currentlyRunning;
    let runningBinary = currentlyRunning ? 'anima-pop-fade'  :  '' ;
        return (
            <div onAnimationEnd={() => this.videoChangeFX()}
                 className={`darken-video ${runningBinary}`}>
            </div>
        );
    }
}


export default DarkenVideo;



