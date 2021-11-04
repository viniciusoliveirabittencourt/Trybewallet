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
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { moeda } = this.state;
    console.log(moeda);
    return (
      <label htmlFor='moeda'>
        Moeda
        <select name='moeda' onChange={ this.handleState } value={ moeda }>
          
        </select>
      </label>
    )
  }
}

export default SelectMoeda;
