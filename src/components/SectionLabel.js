import React, { Component } from 'react';


class SectionLabel extends Component {



    render() {


        return (
            <label
                className="section-label"
            >
                <h1>
                    {this.props.fullStateData.sections[this.props.fullStateData.currentTab-1]}
                </h1>
            </label>
        )
    }
}

export default SectionLabel;