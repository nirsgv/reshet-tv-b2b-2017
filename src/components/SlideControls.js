import React, { Component } from 'react';
import Bullets from './Bullets'

class SlideControls extends Component {
    render() {
        let disablePrev = '',
            disableNext = '';

        const DIS_STR = 'disabled';


        if(this.props.fullStateData.currentTab===1){
        let dailyPlaylistLength;
        if (this.props.fullStateData) {

            let items = this.props.fullStateData.datedPlaylist;
            if (items && items.length) {
                dailyPlaylistLength = items.length;
            }
        }
        if (this.props.currentDaily === 0) {disablePrev = DIS_STR}
        if (this.props.currentDaily === dailyPlaylistLength - 1) {disableNext = DIS_STR}
    }
        if(this.props.fullStateData.currentTab===2){
            let dailyPlaylistLength;
            if (this.props.fullStateData) {
                let items = this.props.fullStateData.weeks;
                if (items && items.length) {
                    dailyPlaylistLength = items.length;
                }
            }
            if (this.props.currentWeekly === 0) {disablePrev = DIS_STR}
            if (this.props.currentWeekly === dailyPlaylistLength - 1) {disableNext = DIS_STR}
        }
        if(this.props.fullStateData.currentTab===3){
            let bottomItemsLength;
            if (this.props.fullStateData) {
                let items = this.props.fullStateData.bottom_line.slideshow;
                if (items && items.length) {
                    bottomItemsLength = items.length;
                }
            }
            if (this.props.currentBottom === 0) {disablePrev = DIS_STR}
            if (this.props.currentBottom === bottomItemsLength - 1) {disableNext = DIS_STR}
        }
            return (
                <div className="slider-controls">
                    <div className="slider-nav">
                        <div className={`slider-btn prev ${disablePrev}`} onClick={this.props.controlSlider.bind(this,"-")}><span>-</span></div>
                        <div className={`slider-btn next ${disableNext}`} onClick={this.props.controlSlider.bind(this,"+")}><span>+</span></div>
                        <Bullets
                            setSlideFromBullet={this.props.setSlideFromBullet}
                            fullStateData={this.props.fullStateData}
                        />
                    </div>
                </div>
            )
    }
}


export default SlideControls;