import {STATIONS} from '../data/stations';

export function getStation() {
  console.log("hallo function")
  let circles = document.querySelectorAll("circle");
  
    for (let j = 0; j < circles.length; j++) {

  
      let circle = circles[j];

      circle.setAttribute('r', "8" );
      let _this=this;
      console.log(circle)
      circle.addEventListener("mouseenter", function(){
        console.log("huhu");
        
        circle.setAttribute('r', "15" );
        let selectedStationId = circle.getAttribute('data-station-id');

        for (let i = 0; i < STATIONS[0].length; i++) {
          let station = STATIONS[0][i];
          if(station.fields.gares_id == selectedStationId){   
           // _this.handlerGareChange(station.fields.nom_gare);  
          }
        }
      });

      circle.addEventListener("mouseleave", function(){
        circle.setAttribute('r', "8" );
      });

    }
}