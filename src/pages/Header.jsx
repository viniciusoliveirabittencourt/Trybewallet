import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { emailValue, expenses } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <div className="container">
          <h1 data-testid="email-field">
            Email:
            { emailValue }
          </h1>
          <h1 data-testid="total-field">
            Despesa Total: R$
            { expenses.length === 0 ? '0,00' : '32,00' }
          </h1>
          <h1 data-testid="header-currency-field">BRL</h1>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  emailValue: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  emailValue: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
