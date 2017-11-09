import React, { Component } from 'react';
import Nav from './Nav'
import Logo from './Logo'
import Hamburger from './Hamburger'
import {NavLink} from 'react-router-dom'
import uuid from 'uuid/v4'


class Header extends Component {
    render() {
    const KEEP_CLOSE = false;
    let refreshSiteAnimate = this.props.fullStateData.refreshAnimationCurrentlyBeingAnimated ? 'refresh-site-animate' : '';
    const path_prefix = window.path_prefix;
        return (
            <header className={refreshSiteAnimate}>
                <NavLink  activeClassName="active"
                          key={uuid()}
                          className="home-link-logo"
                          exact={true}
                          to={path_prefix}
                          onClick={this.props.kickThisUp.bind(this,1,KEEP_CLOSE)}
                >
                    <div className="logo-click-trigger"
                         onClick={this.props.refreshAnimationSwitch.bind(this,true)}>
                    </div>
                </NavLink>
                <Logo fullStateData={this.props.fullStateData}/>
                <Nav fullStateData={this.props.fullStateData}
                     kickThisUp={this.props.kickThisUp.bind(this)}
                />
                    <Hamburger switchMobMenu={()=>this.props.switchMobMenu()}
                />
            </header>
        );
    }
}


export default Header;