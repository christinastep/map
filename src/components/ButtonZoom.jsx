import React from 'react';

class ButtonZoom extends React.Component {
  constructor(props) {
    super(props);
    this.handlerZoomChange = this.handlerZoomChange.bind(this);
    this.state = {
    };
  }


  handlerZoomChange = () => {
    var lang = this.props.name;
    this.props.onSelectZoom(lang);            
  }

  render() {
    const buttonName = this.props.name;
    return (
    <button onClick={this.handlerZoomChange} >{buttonName}</button>
    );
  }
}

export default ButtonZoom;