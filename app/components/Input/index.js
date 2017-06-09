import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  keyPressed(event) {
    if (event.key === 'Enter') {
      this.props.addNewTask(this.state.text);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <div>
        <TextField
          floatingLabelText='New task'
          value={this.state.text}
          onChange={(event, value) => { this.setState({ text: value }); }}
          onKeyPress={(event) => { this.keyPressed(event); }}
        />
      </div>
    );
  }
}

Input.propTypes = {
  addNewTask: PropTypes.func.isRequired,
};

export default Input;
