/**
 * Created by user on 10/06/2017.
 */
import React, { Component } from 'react';
import DailyBoxMaster from './Home-inner/DailyBoxMaster'
import DailyBoxDetail from './Home-inner/DailyBoxDetail'
import MobileShowExternalLink from './Home-inner/MobileShowExternalLink'
import SectionLabel from './../SectionLabel'
import SlideControls from './../SlideControls'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        this.setState({
        })
    }

    getDottedDayMonth(x){
        const xx = x.substring(0, x.length - 5);
        const firstTwoLetters = xx.substring(0, 2);
        const lastTwoLetters = xx.substring(3, 5);
        const switchedFirstAndLastTwoLetters = `${lastTwoLetters}.${firstTwoLetters}`;
        return switchedFirstAndLastTwoLetters;
    }


    render() {
        let bottomVar = `${(this.props.fullStateData.pDataHeight - 120)}px`;



        let stl = {
            bottom: bottomVar
        };
        let emptyStyles = {
        };
        let mobileShowExternalLinkSwitch =
        (this.props.fullStateData.takeoverShow.site_url && (!this.props.fullStateData.takeoverShow.site_url.includes("advancedcustomfields")))
        ? <MobileShowExternalLink fullStateData={this.props.fullStateData} />
        : '';

        return(
        <div className="sect-wrp">
            <section className="home">
            <SectionLabel fullStateData={this.props.fullStateData} />
                <div className={`daily-master-wrp ${!this.props.fullStateData.takeoverShowInjected ? 'active' : 'disabled'}`}>
                    <DailyBoxMaster fullStateData={this.props.fullStateData}
                                pauseIt={this.props.pauseIt.bind(this)}
                                showTakeoverById={this.props.showTakeoverById.bind(this)}
                                getDottedDayMonth={this.getDottedDayMonth.bind(this)}
                                getDayAsString={this.props.getDayAsString.bind(this)}/>
                    <SlideControls controlSlider={this.props.controlSlider.bind(this)}
                                   currentDaily={this.props.fullStateData.currentDaily}
                                   fullStateData={this.props.fullStateData}
                    />
                </div>
                <div

/*                style={this.props.fullStateData.takeoverShowInjected && this.props.fullStateData.layoutIsMobile
                ? stl
                : emptyStyles
                }*/
                    className={`daily-detail-wrp ${this.props.fullStateData.takeoverShowInjected ? 'active' : 'disabled'}`}>
                    <DailyBoxDetail fullStateData={this.props.fullStateData}
                                    showTakeoverById={this.props.showTakeoverById.bind(this)}
                                    clearTakeover={this.props.clearTakeover.bind(this)}
                                    dailyBoxHeightSetter={this.props.dailyBoxHeightSetter.bind(this)}
                                    reverseInstance={this.props.reverseInstance.bind(this)}

                    />
                    {mobileShowExternalLinkSwitch}
                </div>
            </section>
        </div>
        )
    }
}


export default Home;