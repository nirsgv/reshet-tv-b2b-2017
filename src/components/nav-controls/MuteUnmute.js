import React, {Component} from 'react';


class MuteUnmute extends Component {
    componentDidUpdate() {

    }
    render() {
        if(this.refs.muteUnmuteAnimateRef1){
            //this.refs.muteUnmuteAnimateRef1.beginElement();
            //console.log(this.refs.muteUnmuteAnimateRef1);
        }
        //console.log(this.props.fullscreenVideoControls);


        if(this.refs.muteUnmuteAnimateRef1){
            //this.refs.muteUnmuteAnimateRef1.beginElement();
            //console.log(1);
        }
        if(this.refs.muteUnmuteAnimateRef2){
            //this.refs.muteUnmuteAnimateRef2.beginElement();
            //console.log(2);
        }
        let polygonStl = {
            fill: '#fff',
            stroke: '#fff',
            strokeWidth: '5',
            strokeLinecap: 'round'
        };
        let stl = {
            fill: 'transparent',
            stroke: '#fff',
            strokeWidth: '5',
            strokeLinecap: 'round'
        };

        let line1_from, line1_to, line2_from, line2_to;
        const STRAIGHT_PATH1 = "M 48.651772,50.269646 69.395223,25.971024";
        const STRAIGHT_PATH2 = "M 69.395223,50.269646 48.651772,25.971024";
        const CURVED_PATH1 = "M 48.128,49.03 C 50.057,45.934 51.19,42.291 51.19,38.377 C 51.19,34.399 50.026,30.703 48.043,27.577";
        const CURVED_PATH2 = "M 55.082,20.537 C 58.777,25.523 60.966,31.694 60.966,38.377 C 60.966,44.998 58.815,51.115 55.178,56.076";

        if (this.props.fullscreenVideoControls){
            let muteUnmute = this.props.fullscreenVideoControls.muteUnmute;
            if(muteUnmute==='mute'){
                line1_from=CURVED_PATH1;
                line1_to=STRAIGHT_PATH1;

                line2_from =CURVED_PATH2;
                line2_to =STRAIGHT_PATH2;

            }
            else if(muteUnmute==='unmute'){
                line1_from=STRAIGHT_PATH1;
                line1_to=CURVED_PATH1;

                line2_from =STRAIGHT_PATH2;
                line2_to =CURVED_PATH2;

            }
        }

        return (
            <svg width="100%" height="100%" viewBox="0 0 100 100" version="1.1"  ref="muteUnmuteSvgRef">
                <g xmlns="http://www.w3.org/2000/svg" id="g1" style={stl} transform="translate(17,10)">
                    <polygon id="speaker" points="39.389,13.769 22.235,28.606 6,28.606 6,47.699 21.989,47.699 39.389,62.75 39.389,13.769" style={polygonStl}/>
                    <path id="line1"
                          d={line1_to}
                          style={stl}/>
                    <animate id="animation1"
                             ref="muteUnmuteAnimateRef1"
                             attributeType="XML"
                             attributeName="d"
                             from={line1_from}
                             to={line1_to}
                             dur=".1s"
                             begin="indefinite"
                             fill="freeze"
                             repeatCount="1">
                    </animate>
                    />
                    <path id="line2" d={line2_to} style={stl}/>
                    <animate id="animation2"
                             ref="muteUnmuteAnimateRef2"
                             attributeType="XML"
                             attributeName="d"
                             from={line2_from}
                             to={line2_to}
                             dur=".1s"
                             begin="indefinite"
                             fill="freeze"
                             repeatCount="1">
                    </animate>
                    />

{/*
 <path id="line3" d="M 61.71,62.611 C 66.977,55.945 70.128,47.531 70.128,38.378 C 70.128,29.161 66.936,20.696 61.609,14.01" style={stl}/>

                    <path id="path3003" d="M 48.651772,50.269646 69.395223,25.971024"/>
                    <path id="path3003-1" d="M 69.395223,50.269646 48.651772,25.971024"/>
*/}

                </g>
            </svg>
        )
    }
}


export default MuteUnmute;
