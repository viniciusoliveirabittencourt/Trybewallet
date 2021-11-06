import React from 'react';
import Header from './Header';
import InputText from './InputText';
import SelectMoeda from './SelectMoeda';
import SelectMetodoDePagamento from './SelectMetodoDePagamento';
import SelectTagDespesa from './SelectTagDespesa';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <form>
          <InputText labelName="Valor" />
          <InputText labelName="Descrição" />
          <SelectMoeda />
          <SelectMetodoDePagamento />
          <SelectTagDespesa />
        </form>
      </section>
    );
  }
}

export default Wallet;
