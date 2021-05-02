import React, { Component } from 'react';
import Message from './Message';
import NewMessageEntry from './NewMessageEntry';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchMessages } from '../store';

class MessagesList extends Component {
  constructor() {
    super();
    // this.state = { messages: [] };
  }
  componentDidUpdate() {
    this.node.scrollTop = this.node.scrollHeight;
  }

  // async componentDidMount() {
  // const response = await axios.get('/api/messages');
  // const messages = response.data;
  // this.setState({ messages });
  // this.props.fetchInitialMessages();
  // }

  render() {
    const messages = this.props.messages;
    console.log(messages);
    return (
      <div id="AppChat">
        <ul id="MessageList" ref={(node) => (this.node = node)}>
          {messages.map((message, i) => (
            <Message message={message} key={i} />
          ))}
        </ul>
        <NewMessageEntry />
      </div>
    );
  }
}

//--used for selecting the part of the data from the store that the connected component needs--
//--called everytime the state changes--
//---it receives the entire store state and should return an object of data this component needs--
const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};
//--is used for dispatching actions to the store--
//this.props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchInitialMessages: () => {
      dispatch(fetchMessages());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
