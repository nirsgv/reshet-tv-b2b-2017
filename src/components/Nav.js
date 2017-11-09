import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import uuid from 'uuid/v4'
import ExitLogos from './ExitLogos'


class Nav extends Component {
    render() {
        let mappedLinks;


        mappedLinks = this.props.fullStateData.sections.map((layer, index, array) => {
            let activeClassSwitch = 'app-nav-link';

            if (index===0 && this.props.fullStateData.currentTab===1){
                activeClassSwitch='app-nav-link active'
            }

            let tmpIndex = index;
            let tmpTo;
            let exactStatus=false;
            const KEEP_CLOSE = true;
            const path_prefix = window.path_prefix;
            if(index===0){exactStatus=true}
            switch(tmpIndex) {
                case 0: tmpTo = path_prefix + '/';break;
                case 1: tmpTo = path_prefix + '/monthly';break;
                case 2: tmpTo = path_prefix + '/bottom-line';break;
                case 3: tmpTo = path_prefix + '/small-taste';break;
                default: tmpTo = path_prefix + '/';break;
            }
            return (
            <li key={uuid()}>
                <NavLink  activeClassName="active"
                          className={activeClassSwitch}
                          key={uuid()}
                          exact={exactStatus}
                          to={tmpTo}
                          onClick={() => this.props.kickThisUp(tmpIndex+1,KEEP_CLOSE,this)}
                >
                    {this.props.fullStateData.sections[`${tmpIndex}`]}
                </NavLink>
            </li>
            )});
            return (
            <nav>
                <ul className="sections">
                    {mappedLinks}
                </ul>
                <ExitLogos fullStateData={this.props.fullStateData}/>
            </nav>
            )
    }
}
export default Nav;