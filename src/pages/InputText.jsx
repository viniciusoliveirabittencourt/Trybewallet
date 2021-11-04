import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  constructor() {
    super();
    this.handleState = this.handleState.bind(this);
  };

  handleState({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  };

  render() {
    const { labelName } = this.props;
    return (
      <label htmlFor={ labelName }>
        { labelName }
        <input id={ labelName } onChange={ this.handleState } type='text' />
      </label>
    )
  }
}

InputText.proptype = {
    labelName: PropTypes.string.isRequired,
  }

export default InputText;
