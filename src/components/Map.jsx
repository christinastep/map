import React from 'react';

import Linie from './Linie';

import {STATIONS} from '../data/stations';

class Map extends React.Component {
  constructor(props) {
    super(props);
    //this.handlerZoomChange = this.handlerZoomChange.bind(this);
    this.handlerGareChange = this.handlerGareChange.bind(this);
    this.state = {
    };
  }


  handlerGareChange(gareName) {
    this.props.onGareChange(gareName);
  }
 
  componentDidMount() {
    this.getGareId()
  }

  getGareId(){
    let circles = document.querySelectorAll("circle");
    console.log("function child");
    console.log(circles);
  
    for (let j = 0; j < circles.length; j++) {
      
      let circle = circles[j];
      
      circle.setAttribute('r', "8" );
      let _this=this;
      circle.addEventListener("mouseenter", function(){
        console.log("huhu");
        
        circle.setAttribute('r', "15" );
        let selectedStationId = circle.getAttribute('data-station-id');

        for (let i = 0; i < STATIONS[0].length; i++) {
          let station = STATIONS[0][i];
          if(station.fields.gares_id == selectedStationId){   
            _this.handlerGareChange(station.fields.nom_gare);  
          }
        }
      });

      circle.addEventListener("mouseleave", function(){
        circle.setAttribute('r', "8" );
      });

    }
  }

  onChangedSelectSite() {
    this.getGareId()
  }

  onChangedSelectDirection() {
    let scrollContainer=document.querySelector(".container--map");
    let scrollElement=document.querySelector(".zoomWrapper");
   
    //wrapperSvg.className= "wrapperSvg";

    let imgWrapperHeight=scrollContainer.offsetHeight;
    let imgWrapperWidth=scrollContainer.offsetWidth;

    let imgHeight=scrollElement.clientHeight
    let imgWidth=scrollElement.clientWidth

    let yScroll = (imgHeight-imgWrapperHeight)/2;
    let xScroll = (imgWidth-imgWrapperWidth)/2;

    if(this.props.selectedDirection.value==="nord"){
    console.log("nord")
    scrollContainer.scrollTo(xScroll, 0)
    console.log(xScroll);
    
    }
    else if(this.props.selectedDirection.value==="south"){
      console.log("south")
      scrollContainer.scrollTo(xScroll, imgHeight);
      console.log(xScroll);
    }else if(this.props.selectedDirection.value==="west"){
      scrollContainer.scrollTo(0, yScroll);
      console.log(xScroll);
      console.log("west")
    }else if(this.props.selectedDirection.value==="east"){
      console.log("east")
      console.log(xScroll);
      scrollContainer.scrollTo(imgWidth, yScroll);
    }else if(this.props.selectedDirection.value==="center"){
      console.log(xScroll);
      scrollContainer.scrollTo(xScroll, yScroll);
    }
  }


  render() {
    const selectedZoom = this.props.selectedZoom;
    const selectedDirection = this.props.selectedDirection;
    const selectedJOSite = this.props.selectedJOSite.value;
    
    return (
      <div className="container--map">
        <div className="rer--wrapper">
          <p>Selected Linie</p>
          <p>{selectedJOSite}</p>
        </div>
        <div className="zoomWrapper"
          style={ { width: `${selectedZoom}%` } }>
          <div className="wrapperSvg">
            {(selectedJOSite === "athletik")?<Linie nameLine="linie--a" />
            :(selectedJOSite === "rugby")?<Linie nameLine="linie--b" />
            :(selectedJOSite === "velo")?<Linie nameLine="linie--c" />
            :(selectedJOSite === "handball")?<Linie nameLine="linie--d" />
            :(selectedJOSite === "cheval")?<Linie nameLine="linie--j" />
            :(selectedJOSite === "bateau")?<Linie nameLine="linie--n" />
            :<div>
              <Linie nameLine="linie--a" />
              <Linie nameLine="linie--b" />
              <Linie nameLine="linie--c" />
              <Linie nameLine="linie--d" />
              <Linie nameLine="linie--n" />
              <Linie nameLine="linie--p" />
              <Linie nameLine="linie--j" />

            
            </div>}
            <img src="img/ilemap.svg" className="map--bgImage"/>
          </div>
        </div> 
      </div>
    );
  }
}

export default Map;