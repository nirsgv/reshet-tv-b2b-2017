import React, { Component } from 'react';



class Hamburger extends Component {


    switchMobMenu(){
        this.props.switchMobMenu();
    }
    
    render() {
        return (
            <div className="hamburger" onClick={() => this.switchMobMenu()}>
                <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                </div>
            </div>
        )
    }
}


export default Hamburger;





/*


const Hamburger = () => {


    const switchMobMenu = () => {
        this.props.switchMobMenu();
    };

        return (
            <div className="hamburger" onClick={switchMobMenu}>
                <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                </div>
            </div>
        )

}


export default Hamburger;

*/
