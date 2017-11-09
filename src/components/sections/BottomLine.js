/**
 * Created by user on 10/06/2017.
 */
import React, { Component } from 'react';
import SectionLabel from './../SectionLabel'
import uuid from 'uuid/v4'
import SlideControls from './../SlideControls'
import FullScreenButton from './Bottom-line-inner/FullScreenButton'

class BottomLine extends Component {

    getOffsetClass(x){
        if (x===1){return 'offset-right'}
        if (x===2){return 'offset-center'}
        if (x===3){return 'offset-left'}
    }

    render() {
        let currentlyOn = !this.props.fullStateData.bottomLinePresents.currentlyOn;

        let bottomLinePresentsCurrentlyOn = this.props.fullStateData.bottomLinePresents.currentlyOn;

        let disClassName = bottomLinePresentsCurrentlyOn ? 'disabled' : '';


        let containingVideoIndicator = false;
        let offsetDirection;
        let bottomSlideshowItems;
        let tmpClass = 0;
        let completePresentation;
        let currentBottom = this.props.fullStateData.currentBottom;
        if(this.props.fullStateData.dailyOffsetOrigin){
            offsetDirection=this.props.fullStateData.dailyOffsetOrigin
        }

        if(this.props.fullStateData.bottom_line){
        bottomSlideshowItems = this.props.fullStateData.bottom_line.slideshow.map((layer, index, array) => {
            //console.log(layer);
            if (currentBottom === 0){tmpClass++}
            if (currentBottom === index || currentBottom === index+1 || (currentBottom === index-1 && (index-1) > 0 )) {
                if(array.length===1 && index===0){tmpClass=1}
                tmpClass++;
                console.log(layer);

                if (((layer.slide_video_webm !='') || (layer.slide_video_mp4 !='')) || ((layer.slide_video_webm_link !='') || (layer.slide_video_mp4_link !=''))){
                    containingVideoIndicator = true;
                } else {
                    containingVideoIndicator = false;
                }
                let tmpObj = {};
                const videoContainedIndicatorClass = containingVideoIndicator ? 'video-layer' : '';

                //prefer linked videos over hosted videos
                if(layer.slide_video_webm){tmpObj.webm=layer.slide_video_webm.url}
                if(layer.slide_video_webm_link){tmpObj.webm=layer.slide_video_webm_link.url}
                if(layer.slide_video_mp4){tmpObj.webm=layer.slide_video_mp4.url}
                if(layer.slide_video_mp4_link){tmpObj.webm=layer.slide_video_mp4_link.url}

                console.log('tmpObj: ');
                console.log(tmpObj);

                const optionalClickHandler = containingVideoIndicator ? this.props.switchBottomLineSingleVideoDisplay.bind(this,true,tmpObj) : '';
                return (
                        <li className={`bottom-line-item ${this.getOffsetClass(tmpClass)} ${offsetDirection} ${videoContainedIndicatorClass}`}
                            onClick={optionalClickHandler}
                            key={uuid()}
                        >
                            <div className="cell">
                                <img alt={layer.slide_img.title}
                                         src={layer.slide_img.url}
                                />
                            </div>
                        </li>
                    )

                }
                else {
                    return ''
                }
            });

        }

        if(currentlyOn){
            completePresentation=
                <div className={`bottom-line-items-wrp ${disClassName}`}>
                    <SectionLabel fullStateData={this.props.fullStateData} />
                    <ul className="bottom-line-items">
                        {bottomSlideshowItems}
                    </ul>
                    <FullScreenButton
                        toggleBottomLineGallery={this.props.toggleBottomLineGallery.bind(this)}
                    />
                </div>
        }



        return (
                <div className="sect-wrp">
                    {/*<div className="bkg"></div>*/}
                    <section className="bottom-line">
                        <SlideControls controlSlider={this.props.controlSlider.bind(this)}
                                       currentDaily={this.props.fullStateData.currentDaily}
                                       currentBottom={this.props.fullStateData.currentBottom}
                                       setSlideFromBullet={this.props.setSlideFromBullet.bind(this)}
                                       fullStateData={this.props.fullStateData}
                        />

                        {completePresentation}

                    </section>
                </div>
        );
    }
}


export default BottomLine;