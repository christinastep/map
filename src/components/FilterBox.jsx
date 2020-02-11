import React from 'react';

import Select from 'react-select'

import {SITES} from '../data/sites'
import {DIRECTION} from '../data/directions'

class FilterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const headline = this.props.headline;
    const text = this.props.text;
    const name = this.props.name;

    return (
      <div className="filterBox">
        <h3>{headline}</h3>
        <p>{text}</p>

        {this.props.name ==="direction"?

        <Select 
        options={DIRECTION} 
        value={this.state.selectedDirection}
        onChange={this.handleChangeDirection}
        /> 
        :

        <Select 
        options={SITES} 
        value={this.state.selectedJOSite}
        onChange={this.handleChangeSelect}
        />

      }



        
      </div>
    );
  }
}

export default FilterBox;



