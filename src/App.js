import React, { Component } from 'react';
import SectionDisplay from './components/SectionDisplay';
import Mask from './components/Mask';
import BottomLineSingleVideo from './components/sections/Bottom-line-inner/BottomLineSingleVideo';
import FullscreenVideoControls from './components/FullscreenVideoControls';
import SmallTasteGallery from './components/sections/Small-taste-inner/SmallTasteGallery';
import BottomLineGallery from './components/sections/Bottom-line-inner/BottomLineGallery';
import {BrowserRouter as Router} from 'react-router-dom'
import 'whatwg-fetch';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab : 1,
            currentDaily : 0,
            currentWeekly : 0,
            currentBottom : 0,
            width: '0',
            height: '0',
            dailyOffsetOrigin: ' ',
            videoStatus : true,
            colorList : {
                blue : '#0582d4',
                aqwa : '#02e1e0',
                green : '#16b719',
                red : '#f6143a',
                orange : '#f86d12',
                yellow : '#f1bb00'
            },
            currentBkgVid : {
                webm : '',
                mp4 : '',
                poster : '',
                currentlyRunning: false
            },
            fullscreenVideoControls : {
                visible: true,
                playPause: 'play',
                muteUnmute: 'unmute'
            },
            darkenLayer: {
                opacity: 0,
                currentlyRunning: false
            },
            bottomLinePresents : {
                webm : '',
                mp4 : '',
                poster : '',
                currentlyOn: false
            },
            bottomLineSingleVideo : {
                webm : '',
                mp4 : '',
                poster : '',
                currentlyRunning: false
            },
            smallTastePresents : {
                webm : '',
                mp4 : '',
                poster : '',
                currentlyOn: false,
                closingAnimationFinished: false
            },
            takeoverShowInjected: false,
            takeoverShow : { id:'', inner_image:'', logo_image:'', long_title:'', mobile_poster:'', mp4:'', notices:'', outer_image:'', poster:'', show_color:'', shows_dates:'', shows_details:'', site_url:'', sub_title:'', title:'', webm:''},
            sections : ["לוח יומי", "לוח חודשי", "השורה התחתונה", "טעימה קטנה"],
            timeout: false,
            expandSvgIcon: false,
            mobMenuIsOpen: false,
            layoutIsMobile: false,
            layoutIsPhone: false,
            animatedMainCurrentlyBeingAnimated: true,
            refreshAnimationCurrentlyBeingAnimated: false,
            pDataHeight: '',
            sendingLoadAndPlayInstance: false
        };
        this.loadData = this.loadData.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.kickThisUp = this.kickThisUp.bind(this);
        this.controlSlider = this.controlSlider.bind(this);
        this.setSlideFromBullet = this.setSlideFromBullet.bind(this);
        this.switchBottomLineSingleVideoDisplay = this.switchBottomLineSingleVideoDisplay.bind(this);
        this.playPauseButtonViewSwitch = this.playPauseButtonViewSwitch.bind(this);
        this.muteUnmuteButtonViewSwitch = this.muteUnmuteButtonViewSwitch.bind(this);
        this.clearTakeover = this.clearTakeover.bind(this);
        this.videoChangeFX = this.videoChangeFX.bind(this);
        this.expandIt = this.expandIt.bind(this);
        this.toggleBottomLineGallery = this.toggleBottomLineGallery.bind(this);
        this.getShow = this.getShow.bind(this);
        this.switchMobMenu = this.switchMobMenu.bind(this);
        this.getDayAsString = this.getDayAsString.bind(this);
        this.showTakeoverById = this.showTakeoverById.bind(this);
        this.dailyBoxHeightSetter = this.dailyBoxHeightSetter.bind(this);
        this.switchOffAnimation = this.switchOffAnimation.bind(this);
        this.fullTaste = this.fullTaste.bind(this);
        this.refreshAnimationSwitch = this.refreshAnimationSwitch.bind(this);
        this.emptyTaste = this.emptyTaste.bind(this);
        this.reverseInstance = this.reverseInstance.bind(this);


    }
    componentWillMount() {
        this.loadData(`${this.props.baseUrl}`)
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();
        this.isMobile();
    }
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        this.isMobile();
        setTimeout( () => {this.isMobile()}, 10)
    }
    isMobile(){
        const bool = this.state.width <= 1024 ? true : false;
        const bool2 = this.state.width <= 640 ? true : false;
        this.setState({
            layoutIsMobile:bool,
            layoutIsPhone:bool2
        });
    }
    isMobileCorrect(){
        const bool = this.state.width <= 1024 ? true : false;
        return bool;
    }
    refreshAnimationSwitch(x){
        const bool = x ? true : false;
        this.setState({refreshAnimationCurrentlyBeingAnimated:bool});
    }
    dailyBoxHeightSetter(pDataHeight){
        //console.log(pDataHeight);
        this.setState({ pDataHeight : pDataHeight});
    }
    reverseInstance(bool){
        this.setState({ sendingLoadAndPlayInstance : bool});
    }
    switchBottomLineSingleVideoDisplay(x){
        console.log(arguments[1]);
        console.log(arguments[1].webm);
        console.log(arguments[1].mp4);
        let tmpObj = this.state.bottomLineSingleVideo;
        tmpObj.webm = arguments[1].webm;
        tmpObj.mp4 = arguments[1].mp4;
        const bool = x ? true : false;
        tmpObj.currentlyRunning = bool;
        this.setState({bottomLineSingleVideo:tmpObj});
    }


    switchBottomLineSingleVideoDisplay2(x){

        console.log('rtrt');
        console.log(arguments[1]);
        console.log(arguments[1].webm);
        console.log(arguments[1].mp4);
        let tmpObj = this.state.bottomLineSingleVideo;
        tmpObj.webm = arguments[1].webm;
        tmpObj.mp4 = arguments[1].mp4;
        const bool = x ? true : false;
        tmpObj.currentlyRunning = bool;
        this.setState({bottomLineSingleVideo:tmpObj});
    }
    loadData(url){
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(json => {
                //console.log(json);
                this.setState(json);
                this.checkCurrentTab();
                this.solidifyMainVid();
                this.makeArrays();
                this.makeSectionColors();
                this.setState({currentDaily:this.setToday()});
                console.log(this.state);
            })
            .catch(err => {
                console.log(err)
            })
        }
    setToday(){
            const the_dates_array = this.state.datedPlaylist;
            const the_closest_date = the_dates_array.filter( (val,key) => {
            const today = new Date().getTime();
            const time_stamp = new Date(val.day+" 23:59:59").getTime();
            return (today <= time_stamp) ;
        });
        return (the_closest_date.length && the_closest_date.length > 0) ? the_dates_array.indexOf(the_closest_date[0]) : 0;
    }
    makeArrays() {
        let weeklyItems=[];
        let datedPlaylist=[];
        let dailyShowsItems=[];
        if(this.state.weeks){
            for (let i=0;i<this.state.weeks.length;i++){
                weeklyItems.push(this.state.weeks[i]);
                for (let ii=0;ii<this.state.weeks[i].week.length;ii++){
                    datedPlaylist.push(this.state.weeks[i].week[ii]);
                    for (let iii=0;iii<this.state.weeks[i].week[ii].shows.length;iii++){
                        dailyShowsItems.push(this.state.weeks[i].week[ii].shows);
                    }
                }
            }
        }
        this.setState({
            weeklyItems,
            datedPlaylist,
            dailyShowsItems
        });
    }
    colorNameToHexValue(x){
        switch(x) {
            case 'blue':x='#0582d4';break;
            case 'aqwa':x='#02e1e0';break;
            case 'green':x='#16b719';break;
            case 'red':x='#f6143a';break;
            case 'orange':x='#f86d12';break;
            case 'yellow':x='#f1bb00';break;
            default: x='#fff';
        }
        return (x)
    }
    checkCurrentTab(x){
        let tmpHref = window.location.href,
            tmpTab = this.state.currentTab;
        if (tmpHref.includes("daily")){tmpTab=1}
        if (tmpHref.includes("monthly")){tmpTab=2}
        if (tmpHref.includes("bottom-line")){tmpTab=3}
        if (tmpHref.includes("small-taste")){tmpTab=4}
        this.setState({
            currentTab:tmpTab
        });
    }
    setSlideFromBullet(bulletIndex){
      if(this.state.currentTab===2){this.setState({currentWeekly:bulletIndex})}
      if(this.state.currentTab===3){this.setState({currentBottom:bulletIndex})}
    }
    makeSectionColors(){
        const sectionColors = {};
        sectionColors.daily_schedule=this.colorNameToHexValue(this.state.daily_schedule.main_color);
        sectionColors.monthly_schedule=this.colorNameToHexValue(this.state.monthly_schedule.main_color);
        sectionColors.bottom_line=this.colorNameToHexValue(this.state.bottom_line.main_color);
        sectionColors.little_taste=this.colorNameToHexValue(this.state.little_taste.main_color);
        this.setState({sectionColors});
        console.log(this.state);
    }
    getDayAsString(x){
        let timeStamp = String(new Date(x));
        let shortenDayString;
        if (timeStamp){
            shortenDayString = timeStamp.substring(0, 3);
        }
        switch(shortenDayString) {
            case 'Sun':shortenDayString = 'ראשון';break;
            case 'Mon':shortenDayString = 'שני';break;
            case 'Tue':shortenDayString = 'שלישי';break;
            case 'Wed':shortenDayString = 'רביעי';break;
            case 'Thu':shortenDayString = 'חמישי';break;
            case 'Fri':shortenDayString = 'שישי';break;
            case 'Sat':shortenDayString = 'שבת';break;
            default: shortenDayString = 'ראשון';break;

        }
        return (shortenDayString);
    }
    solidifyMainVid() {
        //console.log(this.state);
        const mainVideo = this.state.main_video;
        let webmPre, mp4Pre, posterPre, mobPosterPre;
        if (undefined !== mainVideo){
            let { webm ,mp4 ,poster ,mobile_poster } = mainVideo;
            mobPosterPre = mobile_poster;
            posterPre = poster;
            webmPre = webm;
            mp4Pre = mp4;
            let currentBkgVid = {};
            currentBkgVid.webm=webmPre;
            currentBkgVid.mp4=mp4Pre;
            currentBkgVid.poster=posterPre;
            currentBkgVid.mobile_poster=mobPosterPre;
            this.setState({currentBkgVid});
            //console.log(this.state);
        }
    }
    pauseIt(x,y){
    console.log(x,y);
    this.setState({
        videoStatus:false
        });
    }

    // pressing 'bottom-line' or 'small-taste' menu buttons will open the corresponding section gallery as full-screen
    kickThisUp(tmp,KEEP_CLOSE){
        //console.log(tmp);
        if(tmp===3){this.emptyTaste(true);this.muteUnmuteButtonViewSwitch(true)}
        if(tmp===4){this.fullTaste(true);this.toggleBottomLineGallery(false);this.muteUnmuteButtonViewSwitch(true)}
        this.setState({
            currentTab:tmp,
            animatedMainCurrentlyBeingAnimated:true
        },function(){
            if (this.isMobileCorrect()&&(KEEP_CLOSE)){this.switchMobMenu()};
        });
    }
    expandIt(x){
        console.log(x);
        x
            ? this.setState({expandSvgIcon: true})
            : this.setState({expandSvgIcon: false})
    }
    //true for opening bottom-line-gallery via full-screen
    //false for closing the full-screen
    toggleBottomLineGallery(x){
        console.log(x);
        let tmpObj = this.state.bottomLinePresents;
/*        let tmpPar;
        x
            ? tmpPar = true
            : tmpPar = false;*/
        tmpObj.currentlyOn = x;
        this.setState({bottomLinePresents: tmpObj})
    }
    playPauseButtonViewSwitch(x){
        let tmpObj = this.state.fullscreenVideoControls;
        x
            ? tmpObj.playPause='pause'
            : tmpObj.playPause='play';
        this.setState({fullscreenVideoControls:tmpObj});
        console.log(tmpObj);
    }
    muteUnmuteButtonViewSwitch(x){
        let tmpObj = this.state.fullscreenVideoControls;
        x
            ? tmpObj.muteUnmute='unmute'
            : tmpObj.muteUnmute='mute';
        this.setState({fullscreenVideoControls:tmpObj});
        console.log(x);
    }
    //true for setting video animation classes and start running
    //false receives calls from animationEnd events and used to set the state back
    videoChangeFX(x){
        x
            ?(console.log('video-darken-blur animationStart'), this.setState({darkenLayer:{currentlyRunning:true}, currentBkgVid:{currentlyRunning:true}}))
            :(console.log('video-darken-blur animationEnd'), this.setState({darkenLayer:{currentlyRunning:false}, currentBkgVid:{currentlyRunning:false}}))
    }
    switchMobMenu(){
        this.setState({mobMenuIsOpen: !this.state.mobMenuIsOpen});
    }
    controlSlider(e){
        if(arguments[0]==="+"||arguments[0]==="-"){
            const that=this;
            setTimeout(function(){that.setState({dailyOffsetOrigin:' '});},300);
        }
        if(this.state.currentTab===1){
            if(arguments[0]==="+"){
            if(this.state.currentDaily<this.state.datedPlaylist.length-1){
                this.setState({
                    currentDaily:this.state.currentDaily+1,
                    dailyOffsetOrigin:'from-offset-right'
                    });
                }
            }
            else if(arguments[0]==="-"){
                if(this.state.currentDaily>0){
                    this.setState({
                        currentDaily:this.state.currentDaily-1,
                        dailyOffsetOrigin:'from-offset-left'
                    });
                }
            }
        }
        if(this.state.currentTab===2){
            if(arguments[0]==="+"){
                if(this.state.currentWeekly<this.state.weeks.length-1){
                    this.setState({
                        currentWeekly:this.state.currentWeekly+1,
                        dailyOffsetOrigin:'from-offset-right'
                    });
                }
            }
            else if(arguments[0]==="-"){
                if(this.state.currentWeekly>0){
                    this.setState({
                        currentWeekly:this.state.currentWeekly-1,
                        dailyOffsetOrigin:'from-offset-left'
                    });
                }
            }
        }
        if(this.state.currentTab===3){
            if(arguments[0]==="+"){
            console.log('+++');
                if(this.state.currentBottom<this.state.bottom_line.slideshow.length-1){
                    this.setState({
                        currentBottom:this.state.currentBottom+1,
                        dailyOffsetOrigin:'from-offset-right'
                    });
                }
            }
            else if(arguments[0]==="-"){
                if(this.state.currentBottom>0){
                    console.log('---');
                    this.setState({
                        currentBottom:this.state.currentBottom-1,
                        dailyOffsetOrigin:'from-offset-left'
                    });
                }
            }
        }
    }
    clearTakeover(x){
        this.setState({takeoverShowInjected:false});
        let that = this;
        console.log( this.state.takeoverShow);
        setTimeout(function(){ that.setState({takeoverShow:{ id:'', inner_image:'', logo_image:'', long_title:'', mobile_poster:'', mp4:'', notices:'', outer_image:'', poster:'', show_color:'', shows_dates:'', shows_details:'', site_url:'', sub_title:'', title:'', webm:''}})}, 500);
    
    
        this.reverseInstance(true);
    }
    getShow(x){
        let show;
        this.state.shows.filter(function(word){
            if(word.id===x){
                show=word;
            }
        });
        return show;
    }
    timer(){
        this.setState({timeout:true});

        setTimeout( () => { this.setState({timeout:false}) } , 10);

    }
    timeouter(x,param,dats){
        setTimeout(function(){ this.setState({param:dats})}, x);
    }
    showTakeoverById(x,y){
        const show = this.getShow(x);
        this.timer(this.state.timeout);
        this.setState({
            takeoverShow:show,
            takeoverShowInjected: true
        },function(){
            this.videoChangeFX(true);
        });
    }
    fullTaste(e) {
        if (this.state.smallTastePresents) {
        let tmpObj = this.state.smallTastePresents;
        tmpObj.currentlyOn = true;
        this.setState({smallTastePresents: tmpObj});
        }
    }
    emptyTaste(e) {
        if (this.state.smallTastePresents) {
            let tmpObj = this.state.smallTastePresents;
            tmpObj.currentlyOn = false;
            this.setState({smallTastePresents: tmpObj});
        }
    }
    switchOffAnimation(){
        this.setState({animatedMainCurrentlyBeingAnimated:false});
    }
    chooseColor(tmp) {
        if (this.state.sectionColors) {
            switch (tmp) {
                case 1: tmp=this.state.sectionColors.daily_schedule; break;
                case 2: tmp=this.state.sectionColors.monthly_schedule; break;
                case 3: tmp=this.state.sectionColors.bottom_line; break;
                case 4: tmp=this.state.sectionColors.little_taste; break;
                default: tmp=this.state.sectionColors.daily_schedule; break;
            }
            return (tmp);
        }
    }
    
  render() {
    //console.log(this.state);


      let siteMaskSwitch = this.state.refreshAnimationCurrentlyBeingAnimated ?
          <Mask fullStateData={this.state}
                refreshAnimationSwitch={this.refreshAnimationSwitch}
          />
          :
          '';


    return (
      <div className="App"
           data-color={`${this.chooseColor(this.state.currentTab)}`}
      >
          <Router >
              <SectionDisplay fullStateData={this.state}
                              //{...this.state}
                              clearTakeover={this.clearTakeover}
                              videoChangeFX={this.videoChangeFX}
                              expandIt={this.expandIt}
                              toggleBottomLineGallery={this.toggleBottomLineGallery}
                              getShow={this.getShow}
                              switchMobMenu={this.switchMobMenu}
                              getDayAsString={this.getDayAsString}
                              showTakeoverById={this.showTakeoverById}
                              dailyBoxHeightSetter={this.dailyBoxHeightSetter}
                              switchOffAnimation={this.switchOffAnimation}
                              fullTaste={this.fullTaste}
                              refreshAnimationSwitch={this.refreshAnimationSwitch}
                              controlSlider={this.controlSlider}
                              kickThisUp={this.kickThisUp}
                              setSlideFromBullet={this.setSlideFromBullet}
                              switchBottomLineSingleVideoDisplay={this.switchBottomLineSingleVideoDisplay}
                              reverseInstance={this.reverseInstance}
                              pauseIt={this.pauseIt.bind(this)}
              >
              </SectionDisplay>
          </Router>
          <FullscreenVideoControls
                              disableWhileSmallTasteIsOn={this.state.smallTastePresents.currentlyOn}
                              fullscreenVideoControls={this.state.fullscreenVideoControls}
                              muteUnmuteButtonViewSwitch={this.muteUnmuteButtonViewSwitch}
                              playPauseButtonViewSwitch={this.playPauseButtonViewSwitch}
          />
          <BottomLineGallery fullStateData={this.state}
                             controlSlider={this.controlSlider}
                             toggleBottomLineGallery={this.toggleBottomLineGallery}
                             setSlideFromBullet={this.setSlideFromBullet}
                             switchBottomLineSingleVideoDisplay={this.switchBottomLineSingleVideoDisplay}

          />
          <BottomLineSingleVideo fullStateData={this.state}
                             switchBottomLineSingleVideoDisplay={this.switchBottomLineSingleVideoDisplay}
          />
          <SmallTasteGallery fullStateData={this.state}
                             emptyTaste={this.emptyTaste}
                             setSlideFromBullet={this.setSlideFromBullet}
          />
          {siteMaskSwitch}
      </div>
    );
  }
}
export default App;
