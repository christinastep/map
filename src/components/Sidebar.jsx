import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const selectedGare = this.props.selectedGare;
    const selectedJOSite = this.props.selectedJOSite.label;
    return (
      <div className="container--sidebar">
      <h1>{selectedJOSite}</h1>
      <hr></hr>
      <h1>{selectedGare}</h1>
      </div>
    );
  }
}

export default Sidebar;