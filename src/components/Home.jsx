import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="intro">
        <div className="intro__text">
          <img src="img/logo.png" className="intro__logo" />
          {/* <h1 >Hello Parking</h1> */}
          <h2 className="intro__text__headline">Trouvez le parking<br></br>le plus proche d'une station RER</h2>
          <p className="intro__text__text">Pour rejoundre votre eprovesportive<br></br> lors de 2024</p>
          {/* <button class="button--primary"></button> */}
          <Link className="button--primary intro__button" to="/settings">Start </Link>
        </div>
        
      </div>
    );
  }
}

export default Home;