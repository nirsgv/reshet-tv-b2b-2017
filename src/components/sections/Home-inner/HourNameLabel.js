import React, { Component } from 'react';


class HourNameLabel extends Component {
    constructor() {
        super();
        this.state = {}
    }
    componentWillMount() {
        this.setState({
        })
    }

    showTakeoverById(x,y){
        this.props.showTakeoverById(x,y);
    }
    getShowName(x){
        let matched = this.props.fullStateData.shows.map((layer,index,array) => {
                let match;
                if(layer.id===x){match=layer.title;}
                return match;
            }
        );
        return matched;
    }

    render() {
        return (
            <li className="show" onClick={this.showTakeoverById.bind(this,this.props.b)}>
                <time className="hour">
                    {this.props.a}
                </time>
                <div className="show-name">
                    {this.getShowName(this.props.b)}
                </div>
            </li>

        )
    }
}


export default HourNameLabel;











