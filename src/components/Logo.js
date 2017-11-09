import React, { Component } from 'react';
import SvgLogo from './SvgLogo'


class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <SvgLogo fullStateData={this.props.fullStateData}/>
            </div>
        )
    }
}
export default Logo;


/*
const Logo = (fullStateData) => {
    return (
        <div className="logo">
            <SvgLogo fullStateData={this.props.fullStateData}/>
        </div>
    )
};



export default Logo;
*/
