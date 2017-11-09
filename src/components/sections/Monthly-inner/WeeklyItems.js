import React, { Component } from 'react';
import DayScheduleItems from './DayScheduleItems'
import uuid from 'uuid/v4'


class WeeklyItems extends Component {
    getOffsetClass(x){
        if (x===1){return 'offset-right'}
        if (x===2){return 'offset-center'}
        if (x===3){return 'offset-left'}
    }
    render() {
        let ttmmpp;
        if(this.props.fullStateData.dailyOffsetOrigin){
            ttmmpp=this.props.fullStateData.dailyOffsetOrigin
        }
        let tmp;
        if (this.props.fullStateData.weeks[this.props.iii]){
            tmp = this.props.fullStateData.weeks[this.props.iii].week.map((layer, index, array) => {
                    let day = layer.day;
                    let shows = layer.shows;
                    return (
                        <li className="day-schedule-item"
                            key={uuid()}
                        >
                            <DayScheduleItems
                                getShow={this.props.getShow.bind(this)}
                                fullStateData={this.props.fullStateData} day={day} shows={shows}
                                getDayAsString={this.props.getDayAsString.bind(this)}
                            />
                        </li>
                    );

                return (
                    <div className="week-day">
                    </div>
                   )
            });
        }
        return (
        <li className={`week ${this.getOffsetClass(this.props.parIndex)} ${ttmmpp}`}>
                <ul className="week-days">
                {tmp}
                </ul>
            </li>


        )
        }
    }

export default WeeklyItems;











