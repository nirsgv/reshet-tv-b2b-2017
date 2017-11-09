import React, { Component } from 'react';

class ShowInfo extends Component {
    render() {
        let background = this.props.getShow(this.props.layer.show).logo_image;
        const stl = {
            backgroundImage: `url(${background})`
        };
        return(
            <div className={`item ${this.props.layer.weight}`}>
                <div className="inner-show-box" style={stl}>
                    <time className="air-time">{this.props.layer.hour}</time>
                </div>
            </div>
        )
    }
}


export default ShowInfo;















