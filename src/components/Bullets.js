import React, { Component } from 'react';
import uuid from 'uuid/v4'

class Bullets extends Component {
    changeSlideByBulletClick(x){
        let chosenSlide = Number(x._targetInst._currentElement.props['data-index']);
        console.log(chosenSlide);


        //if(this.props.fullStateData.currentTab===2){this.props.setSlideFromBullet(chosenSlide)};
       this.props.setSlideFromBullet(chosenSlide);
    }
    componentDidUpdate(){
    }
    render() {
        let MONTHLY_BULLETS, BOTTOM_BULLETS, minidotSwitch;
        if (this.props.fullStateData.weeklyItems&&this.props.fullStateData.bottom_line.slideshow) {
            MONTHLY_BULLETS=this.props.fullStateData.weeklyItems.length;
            BOTTOM_BULLETS=this.props.fullStateData.bottom_line.slideshow.length;
          //  console.log(MONTHLY_BULLETS, BOTTOM_BULLETS);
        }
        let bulletArray, bulletItems;
        if(this.props.fullStateData.currentTab){
            if(this.props.fullStateData.currentTab===2){bulletArray=MONTHLY_BULLETS;}
            if(this.props.fullStateData.currentTab===3){bulletArray=BOTTOM_BULLETS;}
        }
        if(bulletArray>=0){
            minidotSwitch = bulletArray > 10 ? 'minidot' : '';
            // console.log(bulletArray);
            // makes an array from 'bulletArray' which is actually a number, so that we can 'map' from that array
            var tmpArray = [];
            for (var i = 0; i < bulletArray; i++) {tmpArray.push('tmpstring');}
            bulletItems = tmpArray.map((layer, index, array) => {
                let currentItem;
                let activeSwitch='';


                let currentWeeklyCurrentBottomSwitch;
                if(this.props.fullStateData.currentTab===2){
                    currentItem=this.props.fullStateData.currentWeekly;
                    if (currentItem===index){activeSwitch='active'}
                }
                if(this.props.fullStateData.currentTab===3){
                    currentItem=this.props.fullStateData.currentBottom;
                    if (currentItem===index){activeSwitch='active'}
                }


                currentItem=this.props.fullStateData[currentWeeklyCurrentBottomSwitch];
                if (currentItem===index){activeSwitch='active'}



                return (
                    <li key={uuid()}
                        onClick={this.changeSlideByBulletClick.bind(this)}
                        className={`dot ${minidotSwitch} ${activeSwitch}`}
                        data-index={index}
                        ref="bulletRef"
                    />
                );
            });
        }
        return (
                <ul className="bullets">
                    {bulletItems}
                </ul>
            )
    }
}


export default Bullets;