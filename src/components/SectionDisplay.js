import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from './sections/Home'
import Monthly from './sections/Monthly'
import BottomLine from './sections/BottomLine'
import SmallTaste from './sections/SmallTaste'
import MainBkgVideo from './sections/MainBkgVideo'
import Header from './Header'
import PixelatedBkg from './PixelatedBkg';

class SectionDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    this.showTakeoverById = this.props.showTakeoverById.bind(this);
    this.clearTakeover = this.props.clearTakeover.bind(this);
    this.controlSlider = this.props.controlSlider.bind(this);
    this.getDayAsString = this.props.getDayAsString.bind(this);
    this.dailyBoxHeightSetter = this.props.dailyBoxHeightSetter.bind(this);
    this.setSlideFromBullet = this.props.setSlideFromBullet.bind(this);
    this.toggleBottomLineGallery = this.props.toggleBottomLineGallery.bind(this);
    this.switchBottomLineSingleVideoDisplay = this.props.switchBottomLineSingleVideoDisplay.bind(this);
    this.expandIt = this.props.expandIt.bind(this);
    this.getShow = this.props.getShow.bind(this);
    this.getDayAsString = this.props.getDayAsString.bind(this);
    this.videoChangeFX = this.props.videoChangeFX.bind(this);
    }

    fullTaste(e){
        this.props.fullTaste(e);
    }

    render() {
        const path_prefix = window.path_prefix;
        let animateSwitch = this.props.fullStateData.animatedMainCurrentlyBeingAnimated ? 'closing-curtain-animation' : '',
            refreshSiteAnimate = this.props.fullStateData.refreshAnimationCurrentlyBeingAnimated ? 'refresh-site-animate' : '',
            slidingMenuState = this.props.fullStateData.mobMenuIsOpen ? 'mob-menu-slide' : '';
        return (
            <div className={`spa-main ${slidingMenuState}`}>
                <Header fullStateData={this.props.fullStateData}
                        kickThisUp={this.props.kickThisUp}
                        switchMobMenu={this.props.switchMobMenu}
                        refreshAnimationSwitch={this.props.refreshAnimationSwitch.bind(this)}
                />
                <MainBkgVideo
                    videoChangeFX={this.videoChangeFX}
                    fullStateData={this.props.fullStateData}/>
                    <PixelatedBkg />
                <main
                    className={`animated-main ${animateSwitch} ${refreshSiteAnimate}`}
                    onAnimationEnd={this.props.switchOffAnimation.bind(this)}
                >
                    <Route
                        key="1"
                        exact
                        path={`${path_prefix}/`}
                        render={(props) => (
                        <Home
                              fullStateData={this.props.fullStateData}
                              reverseInstance={this.props.reverseInstance.bind(this)}
                              pauseIt={this.props.pauseIt.bind(this)}
                              showTakeoverById={this.showTakeoverById}
                              clearTakeover={this.clearTakeover}
                              controlSlider={this.controlSlider}
                              getDayAsString={this.getDayAsString}
                              dailyBoxHeightSetter={this.dailyBoxHeightSetter}
                              setSlideFromBullet={this.setSlideFromBullet}
                        />
                    )}/>
                    <Route
                        key="2"
                        exact
                        exact
                        path={`${path_prefix}/monthly`}
                        render={(props) => (
                        <Monthly
                            getShow={this.getShow}
                            getDayAsString={this.getDayAsString}
                            fullStateData={this.props.fullStateData}
                            controlSlider={this.controlSlider}
                            setSlideFromBullet={this.setSlideFromBullet}
                        />
                    )}/>
                    <Route
                        key="3"
                        exact
                        path={`${path_prefix}/bottom-line`}
                        render={(props) => (
                        <BottomLine
                            controlSlider={this.controlSlider}
                            fullStateData={this.props.fullStateData}
                            toggleBottomLineGallery={this.toggleBottomLineGallery}
                            setSlideFromBullet={this.setSlideFromBullet}
                            switchBottomLineSingleVideoDisplay={this.switchBottomLineSingleVideoDisplay}
                        />
                    )}/>
                    <Route
                        key="4"
                        exact
                        path={`${path_prefix}/small-taste`}
                        render={(props) => (
                        <SmallTaste
                            fullStateData={this.props.fullStateData}
                            fullTaste={this.props.fullTaste}
                            expandIt={this.expandIt}
                            setSlideFromBullet={this.setSlideFromBullet}
                            pass_to_page_content='hi'
                        />
                    )}/>
            </main>
            </div>
        );
    }
}


export default SectionDisplay;
/**
 * Created by user on 23/03/2017.
 */
