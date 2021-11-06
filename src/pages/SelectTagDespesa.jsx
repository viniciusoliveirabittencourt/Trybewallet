import React from 'react';

class SelectTagDespesa extends React.Component {
  constructor() {
    super();
    this.state = {
      tagDespesa: 'alimentacao',
    };
    this.handleState = this.handleState.bind(this);
  }

  handleState({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  render() {
    const { tagDespesa } = this.state;
    return (
      <label htmlFor="tagDespesa">
        Tag
        <select id="tagDespesa" onChange={ this.handleState } value={ tagDespesa }>
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    );
  }
}

export default SelectTagDespesa;
