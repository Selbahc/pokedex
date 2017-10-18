import React, { Component } from 'react';

class InputSearch extends Component {
  handleChange = (e) => {
    this.props.setQueryByName(e.target.value)
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChange} type="text" value={this.props.pokeName} />
        <button onClick={this.props.makeRequest}>Search</button>
      </form>
    );
  }

}

export default InputSearch;
