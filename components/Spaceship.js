import React from 'react';

class Spaceship extends React.Component {
  // constructor(props) {
  //
  // }
  render() {
    return(
      <div className="Spaceship">
        <h2>Name: {this.props.name}</h2>
        <h3>Speed: {this.props.speed}</h3>
        <h3>Has Rockets? ({this.props.hasRockets})</h3>
        <h3>Colors: {this.props.colors.join(", ")}</h3>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;
