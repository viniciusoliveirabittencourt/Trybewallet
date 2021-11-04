import React from 'react';

class SelectMoeda extends React.Component {
  constructor() {
    super();
    this.state = {
      moeda: 'BRL',
    }
    this.handleState = this.handleState.bind(this);
  };

  handleState({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  };

  render() {
    const { moeda } = this.state;
    return (
      <label htmlFor='moeda'>
        Moeda
        <select id='moeda' onChange={ this.handleState } value={ moeda }>
          
        </select>
      </label>
    )
  }
}

export default SelectMoeda;
