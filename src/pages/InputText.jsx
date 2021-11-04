import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  constructor() {
    super();
    this.handleState = this.handleState.bind(this);
  };

  handleState({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { labelName } = this.props;
    return (
      <label htmlFor={ labelName }>
        { labelName }
        <input onChange={ this.handleState } name={ labelName } type='text' />
      </label>
    )
  }
}

InputText.proptype = {
    labelName: PropTypes.string.isRequired,
  }

export default InputText;
