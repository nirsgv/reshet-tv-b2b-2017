/**
 * Created by user on 10/06/2017.
 */
import React, { Component } from 'react';
import SectionLabel from './../SectionLabel'
import WeeklyItems from './Monthly-inner/WeeklyItems'
import Print from './Monthly-inner/Print'
import SlideControls from './../SlideControls'
import uuid from 'uuid/v4'

class Monthly extends Component {
    constructor() {
        super();
        this.state = {}
    }
    componentWillMount() {
        this.setState({
        })
    }
    setBottomFromBullet(x){alert(x)}

    render() {
        //console.log(this.props.fullStateData);
        let currentWeekly = this.props.fullStateData.currentWeekly;

        let listLinks;
        let tmpClass = 0;
        if(this.props.fullStateData.weeks) {
            listLinks = this.props.fullStateData.weeks.map((layer, index, array) => {
                if (currentWeekly === 0){tmpClass++}
                if (currentWeekly === index || currentWeekly === index+1 || (currentWeekly === index-1 && (index-1) > 0 )){

                    //console.log(layer);
                let iii = index;
                    tmpClass++;

                    return (
                    <WeeklyItems
                        parIndex={tmpClass}
                        key={uuid()}
                        getShow={this.props.getShow.bind(this)}
                        fullStateData={this.props.fullStateData} iii={iii}
                        getDayAsString={this.props.getDayAsString.bind(this)}
                    />
                )}
                else {
                    return ''
                }
            });
        }
        return (
        <div className="sect-wrp">
            <section className="monthly">
            <SectionLabel fullStateData={this.props.fullStateData} />

              <div className="month">
                  <ul className="weeks">
                      {listLinks}
                  </ul>
              </div>
            <Print printLink={this.props.fullStateData.print}/>
            <SlideControls controlSlider={this.props.controlSlider.bind(this)}
                           currentWeekly={this.props.fullStateData.currentWeekly}
                           fullStateData={this.props.fullStateData}
                           setSlideFromBullet={this.props.setSlideFromBullet.bind(this)}
            />
            </section>

        </div>
        );
    }
}


export default Monthly;