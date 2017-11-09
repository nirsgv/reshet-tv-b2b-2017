/**
 * Created by user on 10/06/2017.
 */
import React, { Component } from 'react';

class SmallTasteGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        this.setState({ closingAnimationEnded : false})
    }
    componentDidUpdate(){
        
    }
    closeComponent(){
        console.log('closeComponent');
        this.setState({ closingAnimationEnded : true})
    }
    videoChangeFX(){
       // alert("onAnimationEnd");
       this.props.videoChangeFX(false);

    }
    pauseAndClose(){
        this.refs.smallTasteVidRef.pause();
        this.props.emptyTaste();
    }
    render() {
    let currentlyOn = this.props.fullStateData.smallTastePresents.currentlyOn;
    let webm,
        mp4,
        poster,
        onBinary = currentlyOn ? 'active'  :  'disabled' ;
        if(this.props.fullStateData.little_taste){
            webm=this.props.fullStateData.little_taste.webm;
            mp4=this.props.fullStateData.little_taste.mp4;
            poster=this.props.fullStateData.little_taste.poster;
        }
        let vidElem;
        let backBtn;
        let completePresentation;
        if(currentlyOn){
            vidElem=
                <video
                    allowFullScreen
                    controls
                    autoPlay
                    poster={poster}
                    ref="smallTasteVidRef"
                    className={`small-taste-inner-video ${onBinary} enlarge-animate`}>
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
                onClick={this.pauseAndClose.bind(this)}
            >
            </div>;
        }
        if(currentlyOn){
            completePresentation=
                <div className="small-taste-bkg-overlay">
                <div className={`dark-bkg ${onBinary}`}
                     onAnimationEnd={this.closeComponent}
                ></div>
                {vidElem}
                {backBtn}
            </div>

        }



        return (
            <div className = "small-taste-gallery-holder">
                {completePresentation}
            </div>
        );
    }
}


export default SmallTasteGallery;




