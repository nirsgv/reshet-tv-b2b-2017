import React, {Component} from 'react';

class DailyBoxDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            readyToUpdate: true
        }
    }
    showTakeoverById(x, y) {
        this.props.showTakeoverById(x, y);
    }


    componentDidUpdate() {
/*        this.props.fullStateData.takeoverShow.site_url;
        if(this.state.readyToUpdate){
            this.setState({ readyToUpdate : false }, this.takeTimeout(1500));
            let pDataHeight = this.showTextDataRef.clientHeight;
            this.props.dailyBoxHeightSetter(pDataHeight);
        }*/
    }

    takeTimeout(timeoutAmt){
        setTimeout(() =>  this.setState({ readyToUpdate : true }), timeoutAmt);
    }


    render() {
        const REFER_TO_PAGE_IN_SITE = 'לעמוד התוכנית באתר רשת';
        const linkSwitch =
            (this.props.fullStateData.takeoverShow.site_url && (!this.props.fullStateData.takeoverShow.site_url.includes("advancedcustomfields")))
            ?   <a className="mobile-link"
                    href={this.props.fullStateData.takeoverShow.site_url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <span className="msg">
                    {REFER_TO_PAGE_IN_SITE}
                </span>
                </a>
            :   '';
        return (

            <div className="item_plan">
                <div className="right">
                    <a className="link-outside-page"
                       href={this.props.fullStateData.takeoverShow.site_url}
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        <img src={this.props.fullStateData.takeoverShow.outer_image}
                             alt={this.props.fullStateData.takeoverShow.long_title}
                        />
                    <span className="msg">
                        {REFER_TO_PAGE_IN_SITE}
                    </span>
                    </a>
                </div>
                <div className="left">
                    {linkSwitch}
                    <a className="close" 
                       onClick={this.props.clearTakeover.bind(this)}>
                    </a>
                    <div className="inner_right">
                        <h2 className="title">{this.props.fullStateData.takeoverShow.title}</h2>
                        <hr id="shadow-border"/>
                        <p className="data"
                           ref={ (showTextDataRef) => this.showTextDataRef = showTextDataRef}
                        >{this.props.fullStateData.takeoverShow.sub_title}</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default DailyBoxDetail;











