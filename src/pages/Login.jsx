import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target }) {
    const { value, type } = target;
    this.setState({ [type]: value }, () => {
      const { email, password } = this.state;
      if (this.validEmailAndPassword(email, password)) {
        this.setState({ disabled: false });
      }
    });
  };

  emailValid(email) {
    const regex = /\S+@\S+\.+c+o+m/;
      return regex.test(email);
  }

  validEmailAndPassword(email, password) {
    if(this.emailValid(email)) {
      if (password.length > 5) {
        return true;
      } else {
        return false
      };
    } else {
      return false
    };
  };

  render() {
    const { email, password, disabled } = this.state;
    return (
      <form>
        <input
          value={ email }
          onChange={ this.handleInput }
          data-testid="email-input"
          placeholder='E-mail...'
          type='email'
          required
        />
        <input
          value={ password }
          onChange={ this.handleInput }
          data-testid="password-input"
          placeholder='Senha...'
          type='password'
          minlength="6"
          required
        />
        <button disabled={ disabled } type='button'>Entrar</button>
      </form>
    );
  }
}

export default Login;
