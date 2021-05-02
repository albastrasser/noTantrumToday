import React, { Component } from 'react';
import { writeMessage, postNewMessage, resett } from '../store';
import { connect } from 'react-redux';

class NewMessageEntry extends Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler(event) {
    this.props.write(event.target.value);
  }
  handleSubmit(event) {
    // console.log('thisprops', this.props);
    event.preventDefault();
    const content = this.props.newMessageEntry;
    // const name = this.props.nameEntry;
    // this.props.post({ content, name });
    this.props.post(content);
    document.getElementById('form').value = '';
  }
  render() {
    return (
      <form className="MessageForm" onSubmit={this.handleSubmit}>
        <div className="input-container">
          <input
            id="form"
            type="text"
            autoComplete="off"
            name="content"
            ref={(node) => (this.input = node)}
            placeholder="What should you do..."
            onChange={this.changeHandler}
          />
        </div>

        <div className="button-container">
          <button type="submit" className="btn btn-light">
            Chat!
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('state->>', state);
  return {
    newMessageEntry: state.newMessageEntry,
    nameEntry: state.nameEntry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    write: (newMessageEntry) => dispatch(writeMessage(newMessageEntry)),
    post: (messageObj) => dispatch(postNewMessage(messageObj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageEntry);
