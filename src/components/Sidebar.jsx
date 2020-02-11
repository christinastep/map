import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const selectedZoom = this.props.selectedZoom;
    //
    const selectedGare = this.props.selectedGare;
    const selectedJOSite = this.props.selectedJOSite.label;
    return (
      <div className="container--sidebar">
       
          <div>
            <h1>{selectedJOSite}</h1>
            <h1>{selectedGare}</h1>
          </div>
        
      </div>
    );
  }
}

export default Sidebar;