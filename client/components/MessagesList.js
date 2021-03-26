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

  async componentDidMount() {
    // const response = await axios.get('/api/messages');
    // const messages = response.data;
    // this.setState({ messages });
    this.props.fetchInitialMessages();
  }

  render() {
    const channelId = Number(this.props.match.params.channelId); // because it's a string "1", not a number!
    const messages = this.props.messages;
    const filteredMessages = messages.filter(
      (message) => message.channelId === channelId
    );

    return (
      <div>
        <ul className="media-list">
          {filteredMessages.map((message) => (
            <Message message={message} key={message.id} />
          ))}
        </ul>
        <NewMessageEntry channelId={channelId} />
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
