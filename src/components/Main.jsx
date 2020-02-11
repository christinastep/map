import React from 'react';
import ButtonZoom from './ButtonZoom';

import Map from './Map';
import Sidebar from './Sidebar';
//import Filter from './Filter';
import Select from 'react-select'

import {SITES} from '../data/sites'
import {DIRECTION} from '../data/directions'
//import {getStation} from '../functions/hoverStation';
import { Link } from 'react-router-dom'




class Main extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = {
      selectedGare:"",
      //selectedZoom:"100",
      //zoom: zoomes.normal,
      selectedJOSite: "Sport",
      selectedDirection: "center",
    };
    this.handlerGareChange = this.handlerGareChange.bind(this);
  }

  handlerGareChange(selectedGare) {
    this.setState({
      selectedGare: selectedGare
    });
  }

  handleZoomChange = (zoomValue) => {
    this.setState({selectedZoom: zoomValue});
  }


  handleChangeDirection = selectedDirection => {
    console.log("direction")
    this.setState(
      { selectedDirection }
    ); 
    setTimeout(() => {
      this.child.current.onChangedSelectDirection();
    }, 100);
  };


  handleChangeSelect = selectedJOSite => {
    console.log("site")
    this.setState(
      { selectedJOSite }
    );  

    setTimeout(() => {
      this.child.current.onChangedSelectSite();
    }, 100);
    
  };


  render() {
    const { selectedJOSite } = this.state;
    const { selectedDirection } = this.state;
    //const selectedDirection = this.props.selectedDirection.label;

    return (
      <div className="container--wrapper">

        <div className="filter--zoom">

     
          <ButtonZoom 
          onSelectZoom={this.handleZoomChange}
          name="100" />

          <ButtonZoom 
          onSelectZoom={this.handleZoomChange}
          name="200" />

          <ButtonZoom 
          onSelectZoom={this.handleZoomChange}
          name="300" />

          {/* <ButtonZoom 
          changeZoom={this.toggleZoom}
          name="normal" /> */}
  

        </div>


        


        {this.props.match.path==="/settings"?
          <div className="container--filter">

          <div className="filterBox">
            <h3>Direction d'arrive</h3>
            <p>Sur Paris</p>

            <Select 
            options={SITES} 
            value={selectedJOSite}
            onChange={this.handleChangeSelect}
            />
          </div>

          <div className="filterBox">
            <h3>Direction d'arrive</h3>
            <p>Sur Paris</p>

            <Select 
            options={DIRECTION} 
            value={selectedDirection}
            onChange={this.handleChangeDirection}
          />  
          </div>
          <Link className="button--primary intro__button" to="/map">Start </Link>

        </div>
        :""}

        <Map 
        ref={this.child} 
        selectedSite={this.state.selectedSite}
        selectedDirection={this.state.selectedDirection}
        selectedGare={this.state.selectedGare}
        onGareChange={this.handlerGareChange}
        selectedZoom={this.state.selectedZoom}
        
        //onSiteChange={this.handlerSiteChange}
        selectedJOSite={this.state.selectedJOSite} 
        />

        <Sidebar 
        selectedDirection={this.state.selectedDirection}
        selectedGare={this.state.selectedGare}
        selectedZoom={this.state.selectedZoom}
        selectedJOSite={this.state.selectedJOSite} 
        />
      </div>
    );
  }
}

export default Main;