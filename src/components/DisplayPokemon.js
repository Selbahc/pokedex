import React, { Component } from 'react';

class DisplayPokemon extends Component {

  render() {
    return (
      <img src={this.props.data.sprites.front_default} alt='pokemon' />
    );
  }

}

export default DisplayPokemon;
