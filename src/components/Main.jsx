import React from 'react';

import Map from './Map';
import Sidebar from './Sidebar';
//import Filter from './Filter';
import Select from 'react-select'

import {SITES} from '../data/sites'
import {getStation} from '../functions/hoverStation';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGare:"",
      selectedJOSite: "Sport",
    };
    this.handlerGareChange = this.handlerGareChange.bind(this);
  }

  handlerGareChange(selectedGare) {
    this.setState({
      selectedGare: selectedGare
    });
  }

  handleChange = selectedJOSite => {
    this.setState(
      { selectedJOSite }
    );  

    setTimeout(function(){
      getStation()
    }, 3000);
    
  };


  render() {
    const { selectedJOSite } = this.state;

    return (
      <div className="container--wrapper">

        <div className="container--filter">

          <Select 
          options={SITES} 
          value={selectedJOSite}
          onChange={this.handleChange}
          />
        </div>
        

        <Map 
        selectedGare={this.state.selectedGare}
        onGareChange={this.handlerGareChange}
        //onSiteChange={this.handlerSiteChange}
        selectedJOSite={this.state.selectedJOSite} 
        />

        <Sidebar 
        selectedGare={this.state.selectedGare}
        selectedJOSite={this.state.selectedJOSite} 
        />
      </div>
    );
  }
}

export default Main;