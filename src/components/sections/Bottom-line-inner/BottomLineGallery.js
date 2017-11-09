/**
 * Created by user on 10/06/2017.
 */
import React, { Component } from 'react';
import uuid from 'uuid/v4'
import SlideControls from './../../SlideControls'


class BottomLineGallery extends Component {
    componentDidMount(){
       // alert('componentDidMount')
    }
    componentDidUpdate(){

    }
    getOffsetClass(x){
        if (x===1){return 'offset-right'}
        if (x===2){return 'offset-center'}
        if (x===3){return 'offset-left'}
    }
    al(x){

        console.log(x);

    }
    render() {
        let currentlyOn = this.props.fullStateData.bottomLinePresents.currentlyOn;
        let solo = this.props.fullStateData.bottomLinePresents.currentlyOn && !this.props.fullStateData.bottomLineSingleVideo.currentlyRunning;
        let backBtn,
            fsBottomSlideshowItems,
            containingVideoIndicator = false;
        let completePresentation;
        // let completePresentation = this.props.fullStateData.currentBottom;

        if (currentlyOn) {
            console.log(this.props);
            let ttmmpp;
            let tmpClass = 0;
            let currentBottom = this.props.fullStateData.currentBottom;
            if (this.props.fullStateData.dailyOffsetOrigin) {
                ttmmpp = this.props.fullStateData.dailyOffsetOrigin
            }
            if (this.props.fullStateData.bottom_line) {
                fsBottomSlideshowItems = this.props.fullStateData.bottom_line.slideshow.map((layer, index, array) => {
                    console.log(layer);
                    if (currentBottom === 0){tmpClass++}
                    
                    if (currentBottom === index || currentBottom === index+1 || (currentBottom === index-1 && (index-1) > 0 )) {
                        tmpClass++;




                        if (((layer.slide_video_webm !='') || (layer.slide_video_mp4 !='')) || ((layer.slide_video_webm_link !='') || (layer.slide_video_mp4_link !=''))){
                            containingVideoIndicator = true;
                        } else {
                            containingVideoIndicator = false;
                        }


                        let tmpObj = {};
                        //prefer linked videos over hosted videos
                        if(layer.slide_video_webm){tmpObj.webm=layer.slide_video_webm.url}
                        if(layer.slide_video_webm_link){tmpObj.webm=layer.slide_video_webm_link.url}
                        if(layer.slide_video_mp4){tmpObj.webm=layer.slide_video_mp4.url}
                        if(layer.slide_video_mp4_link){tmpObj.webm=layer.slide_video_mp4_link.url}

                        const videoContainedIndicatorClass = containingVideoIndicator ? 'video-layer' : ' ';

                        const optionalClickHandler = containingVideoIndicator ? this.props.switchBottomLineSingleVideoDisplay.bind(this,true,tmpObj) : '';





                        return (
                            <li className={`fs-bottom-line-item ${this.getOffsetClass(tmpClass)} ${ttmmpp} ${videoContainedIndicatorClass}`}
                                key={uuid()}
                                onClick={optionalClickHandler}
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
        }
        
        //const BACK_TXT = 'אחורה';
        let onBinary = currentlyOn ? 'active'  :  'disabled' ;
        let animateToggled = currentlyOn ? 'enlarge-animate2'  :  '' ;

        //let tmpBool = this.props.fullStateData.bottomLinePresents.currentlyOn;

        if (currentlyOn){
            backBtn = <button
                className={`back-button fade-animate`}
                onClick={this.props.toggleBottomLineGallery.bind(this,false)}
            >
                <span className="txt">
                </span>
            </button>;
        }


        if(solo){
            completePresentation=
                <div className="bottom-line-bkg-overlay">
                    <div className={`dark-bkg ${onBinary}`}></div>
                    <ul className={`fs-bottom-line-items ${animateToggled}`}>
                        {fsBottomSlideshowItems}
                    </ul>
                    {backBtn}
                    {currentlyOn ? <SlideControls controlSlider={this.props.controlSlider.bind(this)}
                                                  currentDaily={this.props.fullStateData.currentDaily}
                                                  currentBottom={this.props.fullStateData.currentBottom}
                                                  fullStateData={this.props.fullStateData}
                                                  setSlideFromBullet={this.props.setSlideFromBullet.bind(this)}
                    /> : ''}
                </div>

        }
        return (

        <div className = "bottom-line-gallery-holder">
            {completePresentation}
        </div>



        );
    }
}


export default BottomLineGallery;




