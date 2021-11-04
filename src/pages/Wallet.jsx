import React from 'react';
import Header from './Header';
import InputText from './InputText';
import SelectMoeda from './SelectMoeda';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <form>
          <InputText labelName='Valor' />
          <InputText labelName='Descrição' />
          <SelectMoeda />
        </form>
      </section>
    );
  }
}

export default Wallet;
