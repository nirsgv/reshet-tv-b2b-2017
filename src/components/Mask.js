import React, {Component} from 'react';

class Mask extends Component {
    componentWillMount() {
    }
    componentDidMount() {
        console.log('just mounted!')
    }
    componentWillUnmount() {
        console.log('just unmounted!')
    }
    componentDidUpdate() {
        console.log(this.props)
    }

    render() {
        let refreshSiteAnimate = this.props.fullStateData.refreshAnimationCurrentlyBeingAnimated ? 'refresh-site-animate' : '',
            viewPortWidth = this.props.fullStateData ? this.props.fullStateData.width : 0,
            viewPortHeight = this.props.fullStateData ? this.props.fullStateData.height : 0;
        return (
            <div className={`mask-spa-wrp ${refreshSiteAnimate}`}
                 onAnimationEnd={this.props.refreshAnimationSwitch.bind(this,false)}
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                     version="1.1"
                     id="spa-mask"
                     viewBox={`0 0 ${viewPortWidth} ${viewPortHeight}`}
                     width={viewPortWidth}
                     height={viewPortHeight}
                     preserveAspectRatio="xMidYMid meet"
                >
                     <defs>
                         <pattern id="pat" patternUnits="userSpaceOnUse" width="80" height="80">
                             <image x="0" y="0" width="80" height="80" href={require(`../img/noise-gif2.gif`)} id="noise-bkg"/>
                         </pattern>
                         <rect id="bottom-white-layer"
                               width={viewPortWidth}
                               height={viewPortHeight}
                               fill="#000"
                         />
                        <rect id="bkg"
                              width={viewPortWidth}
                              height={viewPortHeight}
                              fill="url(#pat)"
                            />
                        <mask id="maskOdd"
                              maskUnits="objectBoundingBox"
                              width={viewPortWidth}
                              height={viewPortHeight}
                        >

                            <g id="g" width={viewPortWidth}
                               height={viewPortHeight}>
                                {/*use this rect to mask down everything*/}
                                <rect width={viewPortWidth}
                                      height={viewPortHeight}
                                      fill="white"
                                      x="0"
                                      y="0"
                                />
                                <svg width={viewPortWidth}
                                     height={viewPortHeight}
                                     x="calc( 50% - 325px )"
                                     y="calc( 50% - 200px )"
                                     id="overflow" >
                                    <g id="gAnimated"
                                       width={viewPortWidth}
                                       height={viewPortHeight}>
                                        <path d="M528.6,10.2H378l-41.3,41h192c29.3,0,53.2,23.9,53.2,53.2v155c0,29.3-23.9,53.2-53.2,53.2H104l0,0l0,0l-54,35.8v-87.5h-41 V425l107.3-71.4h412.2c51.9,0,94.2-42.3,94.2-94.2v-155C622.8,52.5,580.5,10.2,528.6,10.2z"/>
                                        <path d="M293.6,102.7v93.9h43.1v-93.9H293.6z"/>
                                        <path d="M363.3,102.7v71.9c0,7.5-0.9,20.7-3.5,26.4c-2.3,5.1-5.3,8.8-9.2,11.5c-4.1,2.8-9,4.7-14.7,5.6 c-6.6,1.1-24.3,1.5-30.6,1.5l-37.6,0v-117l-43.2,0v158h104.4c24.5,0,43.6-7.4,56.9-21.1c12.5-13,20-37.9,20-66.7v-70.3H363.3z"/>
                                        <path d="M74.1,102.7l0.1,117H50.1v41H115V143.5h45.2v117.3h41v-158H74.1z"/>
                                        <path d="M493.7,102.7h-69.4v40.8l63.4,0v117.3h41V139.2C528.7,119.1,513,102.7,493.7,102.7z"/>
                                            <animateTransform
                                                attributeName="transform"
                                                attributeType="XML"
                                                type="scale"
                                                from="0.01"
                                                to="4"
                                                dur="2.5s"
                                                fill="freeze"
                                                repeatCount="1"
                                           />
                                    </g>
                                </svg>
                            </g>
                        </mask>
                    </defs>
                    <use href="#bottom-white-layer"
                         id="my-use"
                         width={viewPortWidth}
                         height={viewPortHeight}
                    />
                    <use href="#bkg"
                         mask="url(#maskOdd)"
                         id="my-use"
                         width={viewPortWidth}
                         height={viewPortHeight}
                    />
                </svg>
            </div>
        )
    }
}


export default Mask;