import React from 'react';

class SelectMetodoDePagamento extends React.Component {
  constructor() {
    super();
    this.state = {
      metodoPagamento: 'dinheiro',
    }
    this.handleState = this.handleState.bind(this);
  };

  handleState({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  };

  render() {
    const { metodoPagamento } = this.state;
    return (
      <label htmlFor='metodoPagamento'>
        Método de pagamento
        <select id='metodoPagamento' onChange={ this.handleState } value={ metodoPagamento }>
          <option value='dinheiro'>Dinheiro</option>
          <option value='cartaoDeCredito'>Cartão de crédito</option>
          <option value='cartaoDeDebito'>Cartão de débito</option>
        </select>
      </label>
    )
  }
}

export default SelectMetodoDePagamento;
