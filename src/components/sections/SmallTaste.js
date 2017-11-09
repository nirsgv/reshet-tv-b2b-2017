/**
 * Created by user on 10/06/2017.
 */
import React, { Component } from 'react';
import SectionLabel from './../SectionLabel'
import ExpandIcon from './../ExpandIcon'


class SmallTaste extends Component {

    render() {
        let tmp;
        let webmPlayString;
        let mp4PlayString;
        if(this.props.fullStateData.little_taste){
            tmp = this.props.fullStateData.little_taste['poster'];
            webmPlayString = this.props.fullStateData.little_taste['webm'];
            mp4PlayString = this.props.fullStateData.little_taste['mp4'];
        }


        return (
            <div className='sect-wrp'>
                <section className='small-taste'>
                <SectionLabel fullStateData={this.props.fullStateData}/>
                    <div className='cell'>
                        <div className='video-thumb'
                             onMouseOver={this.props.expandIt.bind(this,true)}
                             onMouseOut={this.props.expandIt.bind(this,false)}
                        >
                            <img alt='video-thumb'
                                 src={tmp}
                                 onClick={this.props.fullTaste.bind(this,webmPlayString,mp4PlayString)}
                            />
                            <ExpandIcon fullStateData={this.props.fullStateData.expandSvgIcon}/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


export default SmallTaste;