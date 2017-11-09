import React, { Component } from 'react';
import ShowInfo from './ShowInfo'
import uuid from 'uuid/v4'


class DayScheduleItems extends Component {
    getDayNumShort(x){
        const shortNum = x.substring(0, x.length - 5).substring(3, 5);
        return shortNum;
    }
    getYearNum(x){
        const shortNum = x.substring(x.length - 4);
        return shortNum;
    }
    getMonthNum(x){
        const shortNum = x.substring(0, 2);
        return shortNum;
    }
    shortenMonthName(x){
        const abbreviation = x.substring(0, 3);
        const withEmp = abbreviation + "'";
        return withEmp;
    }
    getMonthAsString(x){
        let tmp;
        switch(x) {
            case '01':tmp = 'ינואר';break;
            case '02':tmp = 'פברואר';break;
            case '03':tmp = 'מרץ';break;
            case '04':tmp = 'אפריל';break;
            case '05':tmp = 'מאי';break;
            case '06':tmp = 'יוני';break;
            case '07':tmp = 'יולי';break;
            case '08':tmp = 'אוגוסט';break;
            case '09':tmp = 'ספטמבר';break;
            case '10':tmp = 'אוקטובר';break;
            case '11':tmp = 'נובמבר';break;
            case '12':tmp = 'דצמבר';break;
            default: tmp = '';break;
        }
        return (tmp);
    }
    render() {
    //console.log(this.props.day);
    //console.log(this.props.shows);
        let tmp;
        if (this.props.fullStateData.shows){
            tmp = this.props.shows.map((layer, index, array) => {
                return (
                    <ShowInfo
                        key={uuid()} 
                        getShow={this.props.getShow.bind(this)}
                        layer={layer}/>
                        )
                }
            );
        }
        return (
            <div className="day-flush">
                <label className="date">
                    <time className="num-day">{this.getDayNumShort(this.props.day)}</time>
                    <hr className="num-day-seporator"/>
                    <span className="one-liner">
                        <time className="txt-month">{this.shortenMonthName(this.getMonthAsString(this.getMonthNum(this.props.day)))}</time>
                        <time className="num-year">{this.getYearNum(this.props.day)}</time>
                    </span>
                    <time className="txt-day">{this.props.getDayAsString(this.props.day)}</time>
                </label>
                <div className="items">
                    {tmp}
                </div>
            </div>
        )
    }
}


export default DayScheduleItems;











