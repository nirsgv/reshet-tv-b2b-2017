import React, {Component} from 'react';

class SvgLogo extends Component {
    chooseColor(tmp) {
        if (this.props.fullStateData.sectionColors) {
            switch (tmp) {
                case 1: return this.props.fullStateData.sectionColors.daily_schedule; break;
                case 2: return this.props.fullStateData.sectionColors.monthly_schedule; break;
                case 3: return this.props.fullStateData.sectionColors.bottom_line; break;
                case 4: return this.props.fullStateData.sectionColors.little_taste; break;
                default: return this.props.fullStateData.sectionColors.daily_schedule; break;
            }
        }
    }
    render() {
        //let data = this.props.fullStateData.currentTab;
        //console.log(data);
        return (
            <svg xmlns="http://www.w3.org/2000/svg"
                 version="1.1"
                 id="company-logo"
                 viewBox="-50 0 730 440"
                 preserveAspectRatio="xMidYMid meet"
            >
                <g
                    id="group-paths"
                    fill={this.chooseColor(this.props.fullStateData.currentTab)}
                >
                    <path d="M528.6,10.2H378l-41.3,41h192c29.3,0,53.2,23.9,53.2,53.2v155c0,29.3-23.9,53.2-53.2,53.2H104l0,0l0,0l-54,35.8v-87.5h-41 V425l107.3-71.4h412.2c51.9,0,94.2-42.3,94.2-94.2v-155C622.8,52.5,580.5,10.2,528.6,10.2z"/>
                    <path d="M293.6,102.7v93.9h43.1v-93.9H293.6z"/>
                    <path d="M363.3,102.7v71.9c0,7.5-0.9,20.7-3.5,26.4c-2.3,5.1-5.3,8.8-9.2,11.5c-4.1,2.8-9,4.7-14.7,5.6 c-6.6,1.1-24.3,1.5-30.6,1.5l-37.6,0v-117l-43.2,0v158h104.4c24.5,0,43.6-7.4,56.9-21.1c12.5-13,20-37.9,20-66.7v-70.3H363.3z"/>
                    <path d="M74.1,102.7l0.1,117H50.1v41H115V143.5h45.2v117.3h41v-158H74.1z"/>
                    <path d="M493.7,102.7h-69.4v40.8l63.4,0v117.3h41V139.2C528.7,119.1,513,102.7,493.7,102.7z"/>
                </g>
            </svg>
        )
    }
}


export default SvgLogo;
