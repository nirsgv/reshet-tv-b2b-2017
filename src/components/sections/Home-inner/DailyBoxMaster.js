import React, { Component } from 'react';
import HourNameLabel from './HourNameLabel'
import uuid from 'uuid/v4'


class DailyBoxMaster extends Component {
    showTakeoverById(x,y){
        this.props.showTakeoverById(x,y);
    }

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
        let listLinks;
        let tmpClass = 0;
        let currentDaily = this.props.fullStateData.currentDaily;
        if(this.props.fullStateData.datedPlaylist){
            listLinks = this.props.fullStateData.datedPlaylist.map((layer,index,array) => {
                //debugger;
                if (currentDaily === 0){tmpClass++}
                if ((currentDaily === index) ||
                   (currentDaily === index+1) ||
                   (currentDaily === index-1 && (index-1) > 0 )
                    ) {
                    let hourNameLabels;
                    hourNameLabels = layer.shows.map((layer, index, array) => {
                    return(
                        <HourNameLabel
                            key={uuid()}
                            showTakeoverById={this.props.showTakeoverById.bind(this)}
                            a={layer.hour}
                            b={layer.show}
                            fullStateData={this.props.fullStateData}
                        />
                    )
                });
                tmpClass++;
                return(
                    <li key={uuid()} className={`daily-item ${this.getOffsetClass(tmpClass)} ${ttmmpp}`}>
                        <ul className="airtime">
                            <li className="date-txt"><time>{this.props.getDayAsString(layer.day)}</time></li>
                            <li className="date-num"><time>{this.props.getDottedDayMonth(layer.day)}</time></li>
                        </ul>
                        <ul className="shows">
                            {hourNameLabels}
                        </ul>
                    </li>
                )
            }})

        }
        return (
                <ul className="daily-items">
                    {listLinks}
                </ul>
                )
    }
}


export default DailyBoxMaster;











