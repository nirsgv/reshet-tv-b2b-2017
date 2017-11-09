import React, { Component } from 'react';


class ExpandIcon extends Component {
    render() {
        let truthy = this.props.fullStateData;
        //console.log(truthy);
        const strokeWidth="3";
        const iconColor="#fff";
        let translateUpA = "11,1";
        let translateUpB = "14,-2";
        let translateDownA = "1,11";
        let translateDownB = "-2,14";
        let positionUpArrow = truthy ? translateUpB : translateUpA;
        let positionDownArrow = truthy ? translateDownB : translateDownA;

        return (
            <div className="expand-icon">
                <svg xmlns="http://www.w3.org/2000/svg"
                     version="1.1"
                     className="expand-icon-svg"
                     x="0px"
                     y="0px"
                     width="54px"
                     height="54px"
                     viewBox="0 0 54 54"
                     fill={iconColor}
                     id="expand-icon-svg"
                >
                        <path
                        transform="matrix(1 0 0 1 2.999999999999986 3.000000000000025)"
                        width="48"
                        className="circle"
                        height="48"
                        strokeWidth={strokeWidth}
                        strokeMiterlimit="3"
                        stroke={iconColor}
                        fill="transparent"
                        d="M-2.5579538487363607e-13,23.99999999999994 C-2.5579538487363607e-13,10.745164799999948 10.745164799999586,0 23.999999999999744,0 C37.25483519999938,0 47.99999999999973,10.745164799999948 47.99999999999973,23.99999999999994 C47.99999999999973,37.25483519999979 37.25483519999938,48 23.999999999999744,48 C10.745164799999586,48 -2.5579538487363607e-13,37.25483519999979 -2.5579538487363607e-13,23.99999999999994 Z "/>
                    <g transform="matrix(1 0 0 1 16.99999999999993 16.999999999999996)">
                    <g id="up-arrow"
                      transform={`translate(${positionUpArrow})`} >
                <path
                      transform="matrix(-1 1.8988215193149856e-15 -1.8988215193149856e-15 -1 9.63867553805737 9.073928452750216)"
                      width="9.481401722209455"
                      height="9.073928452750259"
                      strokeWidth={strokeWidth}
                      stroke={iconColor}
                      d="M1.4210854715202004e-14,-4.263256414560601e-14 L9.481401722209455,9.073928452750216 L0,9.073928452750181 L1.4210854715202004e-14,-4.263256414560601e-14 Z "/>
                <path transform="matrix(0.69871459730029 -0.7154005252440716 0.7154005252440716 0.69871459730029 2.1316282072803006e-13 6.660126803707513)"
                      width="4.018582384021791"
                      height="4.225008312721599"
                      strokeWidth={strokeWidth}
                      stroke={iconColor}
                      d="M-8.526512829121202e-14,-1.9895196601282805e-13 L3.993046651507406,0.19441118950963698 L4.018582384021705,4.2250083127214 L0.025535732514512688,4.0305971232121465 L-8.526512829121202e-14,-1.9895196601282805e-13 Z "/>
            </g>
            <g id="down-arrow" transform={`translate(${positionDownArrow})`}>
                <path
                      transform="matrix(1 0 0 1 0 0.5015620620137682)"
                      width="9.481401722209412"
                      height="9.073928452750202"
                      strokeWidth={strokeWidth}
                      stroke={iconColor}
                      d="M0,-2.842170943040401e-14 L9.481401722209412,9.073928452750174 L0,9.073928452750174 L0,-2.842170943040401e-14 Z "/>
                <path
                      transform="matrix(-0.6987145973002911 0.7154005252440706 -0.7154005252440706 -0.6987145973002911 9.638675538057086 2.9363711056372)"
                      width="4.018582384021791"
                      height="4.225008312721641"
                      strokeWidth={strokeWidth}
                      stroke={iconColor}
                      d="M-5.684341886080802e-14,-2.8421709430404007e-13 L3.993046651507427,0.19441118950962277 L4.018582384021734,4.225008312721357 L0.0255357325145269,4.03059712321209 L-5.684341886080802e-14,-2.8421709430404007e-13 Z "/>
        </g>
        </g>
        </svg>
            </div>

        )
    }
}


export default ExpandIcon;













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
