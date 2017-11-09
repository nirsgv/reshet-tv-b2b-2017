/**
 * Created by user on 10/06/2017.
 */
import React, {Component} from 'react';
import DarkenVideo from './../DarkenVideo'

class MainBkgVideo extends Component {
/*    canplaythrough() {
        //console.log('canplaythrough');
    }

    canplay() {
        //console.log('canplay');
    }

    progress() {
        //console.log('progress');
    }

    waiting() {
        //console.log('waiting');
        /!*        function delay(ms){
         var ctr, rej, p = new Promise(function (resolve, reject) {
         ctr = setTimeout(resolve, ms);
         rej = reject;
         });
         p.cancel = function(){ clearTimeout(ctr); rej(Error("Cancelled"))};
         return p;
         }
         delay(3000).then(
         this.props.vidRef.play()
         );*!/

    }*/

    playing() {
        console.log('playing');
    }

    //const shortProp = this.props.fullStateData.fullscreenVideoControls;
    componentDidUpdate() {
        if (!this.props.fullStateData.layoutIsMobile) {
            if (!this.isThereSrc(this.refs.vidRef) || (this.props.fullStateData.takeoverShowInjected && this.props.fullStateData.timeout)) {
                this.refs.vidRef.load()
            }

            if (this.props.fullStateData.fullscreenVideoControls.playPause === 'pause') {
                this.playAndPause(true);
            } else if (this.props.fullStateData.fullscreenVideoControls.playPause === 'play') {
                this.playAndPause(false);
            }


            if (this.props.fullStateData.fullscreenVideoControls.muteUnmute === 'unmute') {
                this.muteAndUnmute(true);
            } else if (this.props.fullStateData.fullscreenVideoControls.muteUnmute === 'mute') {
                this.muteAndUnmute(false);
            }
        }
    }

    isThereSrc(elem) {
        if (!this.props.fullStateData.layoutIsMobile) {
            if (elem.currentSrc !== '') {
                return true
            } else {
                return false
            }
        }
    }

    // if true - pause, else - play
    playAndPause(x) {
        if (!this.props.fullStateData.layoutIsMobile) {
            //console.log('playAndPause called')
            if (x) {
                this.refs.vidRef.pause()
            } else {
                //console.log('playAndPause play called');
                this.refs.vidRef.play();
            }
        }
    }

    // if true - mute, else - unmute
    muteAndUnmute(x) {
        if (!this.props.fullStateData.layoutIsMobile) {
            if (x) {
                this.refs.vidRef.muted = true;
            } else {
                this.refs.vidRef.muted = false;
            }
        }
    }

    checkOrMain(x,webm,mp4,posterPre,mobPosterPre) {
        if (!this.props.fullStateData.layoutIsMobile) {
            if (x) {
                return x;
            } else {
                if(!(posterPre || mobPosterPre)){
                    if (this.props.fullStateData.main_video) {
                        if ('mp4') {
                           return this.props.fullStateData.main_video.mp4
                        } else if ('webm') {
                            return this.props.fullStateData.main_video.webm
                        }
                    }
                }
            }
        }
    }
    checkForPoster(posterPre,mobPosterPre) {
        if(this.props.fullStateData.layoutIsMobile){



            if(mobPosterPre){return mobPosterPre}else{return posterPre}
        } else if (posterPre){
            if(posterPre){return posterPre}else{return mobPosterPre}
        } else if ( ((!posterPre) && (!mobPosterPre))  && this.props.fullStateData.main_video) {
            return this.props.fullStateData.main_video.mobile_poster
        }



    }



    isPlaying(x) {
        if(x.currentTime > 0 && !x.paused && !x.ended && x.readyState > 2) {
            return true
        } else {
            return false
        }
    }


    render() {
        if(!this.props.fullStateData.layoutIsMobile) {
            if (this.props.fullStateData.sendingLoadAndPlayInstance) {
                    if (!(this.isPlaying(this.refs.vidRef))){
                    this.refs.vidRef.load();
                    this.refs.vidRef.play();
                }
            }
        }


           let mobilePosterSwitch = this.props.fullStateData.main_video ? this.props.fullStateData.main_video.mobile_poster : '';

            let mainVideo = this.props.fullStateData.takeoverShowInjected
            ? this.props.fullStateData.takeoverShow
            : this.props.fullStateData.currentBkgVid;

        let webmPre, mp4Pre, posterPre, mobPosterPre;
        if (mainVideo !== undefined) {
            let {webm, mp4, poster, mobile_poster} = mainVideo;
            posterPre = poster;
            mobPosterPre = mobile_poster;
            webmPre = webm;
            mp4Pre = mp4;
        }

        const currentlyRunning = this.props.fullStateData.currentBkgVid.currentlyRunning;
        let runningBinary = currentlyRunning ? 'anima-pop-blur' : '';

        let posterImgResponsiveSwitch = this.props.fullStateData.layoutIsMobile ? mobPosterPre : posterPre;

        let getRidOfVideo = !this.props.fullStateData.layoutIsMobile
            ? <video id="main-bkg-vid"
                     loop="true"
                     muted="true"
                     ref="vidRef"
                     className={`main-background-video ${runningBinary}`}
                     //poster={posterImgResponsiveSwitch}
                     poster={this.checkForPoster(posterPre,mobPosterPre)}
            //webkit-playsinline
            //onCanPlayThrough={this.canplaythrough}
            //onCanPlay ={this.canplay}
            //onProgress={this.progress}
            //onWaiting={this.waiting}
            //onPlaying={this.playing}
        >
            >
            <source
                src={this.checkOrMain(webmPre,'webm',posterPre,mobPosterPre)}
                //src={webmPre}
                type="video/webm"
            />
            <source
                src={this.checkOrMain(mp4Pre,'mp4',posterPre,mobPosterPre)}
                //src={mp4Pre}
                type="video/mp4"
            />
            </video>
            : '';

        return (
            <main className="main-video-bkg-wrp">
                <img id="mob-only-bkg" src={mobilePosterSwitch}/>

                <img src={this.checkForPoster(posterImgResponsiveSwitch)}
                    //alt="Smiley face"
                     id="main-bkg-vid-img"
                />
                {getRidOfVideo}
                <DarkenVideo
                    videoChangeFX={this.props.videoChangeFX.bind(this)}
                    fullStateData={this.props.fullStateData}
                />
            </main>
        );
    }
}


export default MainBkgVideo;