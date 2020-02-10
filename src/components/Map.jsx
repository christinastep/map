import React from 'react';

import Linie from './Linie';

import {STATIONS} from '../data/stations';

class Map extends React.Component {
  constructor(props) {
    super(props);
   
    this.handlerGareChange = this.handlerGareChange.bind(this);
    this.state = {
    };
  }


  handlerGareChange(gareName) {
    this.props.onGareChange(gareName);
  }

  //if site select changed
 
  

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

  getAlert() {
    this.getGareId()
  }


  render() {
    const selectedJOSite = this.props.selectedJOSite.value;
    return (
      <div className="container--map">

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
          


        </div> 
      </div>
    );
  }
}

export default Map;