import React, { Component } from 'react';
import './App.css';
import InputSearch from './components/InputSearch';
import DisplayPokemon from './components/DisplayPokemon';
import request from 'request';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      pokeName: ''
    };
  }

  setQueryByName = (query) => {
    this.setState({
      pokeName : query
    });
  }

  makeRequest = (e) => {
    e.preventDefault();
    request(`https://pokeapi.co/api/v2/pokemon-form/${this.state.pokeName}`, (error, response, body) => {
      // console.log(body);
      this.setState({
        pokeName: '',
        data: JSON.parse(body)
      });
    });

  }

  render() {
    return (
      <div className="App">
        <InputSearch pokeName={this.state.pokeName} setQueryByName={this.setQueryByName}
          makeRequest={this.makeRequest}/>
        {this.state.data !== '' &&
          <DisplayPokemon data={this.state.data}/>}
      </div>
    );
  }
}

export default App;
