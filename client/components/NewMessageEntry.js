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
    const channelId = this.props.channelId;
    const name = this.props.nameEntry;
    this.props.post({ content, channelId, name });
    document.getElementById('form').value = '';
  }
  render() {
    console.log('this---->>', this.props);
    return (
      <form id="new-message-form" onSubmit={this.handleSubmit}>
        <div className="input-group input-group-lg">
          <input
            id="form"
            className="form-control"
            type="text"
            name="content"
            placeholder="Say something nice..."
            onChange={this.changeHandler}
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">
              Chat!
            </button>
          </span>
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
