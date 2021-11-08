import React from 'react';

class SelectMoeda extends React.Component {
  constructor() {
    super();
    this.state = {
      moeda: 'USD',
      arrayMoedas: [],
    };
    this.handleState = this.handleState.bind(this);
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json())
      .then((r) => {
        const results = Object.values(r);
        return this.eliminaDolarTurismo(results);
      })
      .then((r) => this.setState({ arrayMoedas: [...r] }))
      .catch((error) => console.error(error));
  }

  eliminaDolarTurismo(array) {
    const findObject = array.find((element) => element.codein === 'BRLT');
    const arrayIndex = array.indexOf(findObject);
    return array.splice(arrayIndex);
  }

  handleState({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  render() {
    const { moeda, arrayMoedas } = this.state;
    return (
      <label htmlFor="moeda">
        Moeda
        <select id="moeda" onChange={ this.handleState } value={ moeda }>
          { arrayMoedas.map((element, index) => (
            <option
              key={ index }
              value={ element.code }
            >
              { element.code }
            </option>))}
        </select>
      </label>
    );
  }
}

export default SelectMoeda;
