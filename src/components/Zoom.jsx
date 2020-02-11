import React from 'react';
import ButtonZoom from './Button';

class Zoom extends React.Component {
  constructor(props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
    this.state = {
    };
  }


  render() {
    return (
      <div className="filter--zoom">
        <ButtonZoom name="100%" />
        <ButtonZoom name="200%" />
        <ButtonZoom name="300%" />
      </div>
    );
  }
}

export default Zoom;