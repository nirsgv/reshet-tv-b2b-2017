import React, { Component } from 'react';
import PlayPause from './nav-controls/PlayPause';
import MuteUnmute from './nav-controls/MuteUnmute';


class FullscreenVideoControls extends Component {
    render() {
    let playingTruth, audibleTruth,disablePointerEvents;
    playingTruth = (this.props.fullscreenVideoControls.playPause==='play') ? true : false;
    audibleTruth = (this.props.fullscreenVideoControls.muteUnmute==='mute') ? true : false;
    disablePointerEvents = this.props.disableWhileSmallTasteIsOn ? 'disable-pointer-events' : '';
        return (
            <div className={`fullscreen-video-controls ${disablePointerEvents}`}>
                <div className="sound-control">
                    <div className="sound sound-mute">
                        <div className="sound--icon"></div>
                        <div className="sound--wave"></div>
                        <div className="sound--wave"></div>
                    </div>
                </div>
                <div className="play-pause-controls"
                     onClick={this.props.playPauseButtonViewSwitch.bind(this,playingTruth)}
                >
                <PlayPause
                    fullscreenVideoControls={this.props.fullscreenVideoControls}/>
                </div>
                <div className="mute-unmute-controls"
                     onClick={this.props.muteUnmuteButtonViewSwitch.bind(this,audibleTruth)}
                >
                <MuteUnmute
                    fullscreenVideoControls={this.props.fullscreenVideoControls}/>
                </div>

            </div>)
    }
    }


    export default FullscreenVideoControls;













/*
render() {
    let layerItems;
    if (this.props.layers) {
        layerItems = this.props.layers.map((layer, index, array) => {
                return (
                    <li >

                        <CircledNum
                            mappedKey={layer.layerKey}
                            index={index}
                            changeFromNumberClick={this.kickThisUp.bind(this)}
                            key={uuid.v4()}
                            selectedMenu={this.props.selectedMenu}

                        />
                        <MinusOne index={index}
                                  eraseOne={this.props.eraseOne}
                        />

                    </li>
                )
            }
        )
    }
    return (
        <ul className="circled-numbers">
            {layerItems}
            <PlusOne addOne={this.transmitAdd.bind(this)} layerPurpose="img"/>
            <PlusOne addOne={this.transmitAdd.bind(this)} layerPurpose="svg"/>

        </ul>
    )
}
*/
