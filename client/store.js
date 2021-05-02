import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import socket from './socket';

//action type:
const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';
const WRITE_MESSAGE = 'WRITE_MESSAGE';
const GOT_NEW_MESSAGE_FROM_SERVER = 'GOT_NEW_MESSAGE_FROM_SERVER';
const CURRENT_AUTHOR = 'CURRENT_AUTHOR';
const TEXT_NODE = 'TEXT_NODE';
const RESET = 'RESET';

//action creator:
export const gotMessagesFromServer = (messages) => {
  return {
    type: GOT_MESSAGES_FROM_SERVER,
    messages,
  };
};

export const gotNewMessageFromServer = (newMessage) => {
  return {
    type: GOT_NEW_MESSAGE_FROM_SERVER,
    newMessage,
  };
};

export const writeMessage = (inputContent) => {
  return {
    type: WRITE_MESSAGE,
    newMessageEntry: inputContent,
  };
};

export const updateTextNode = (textNode) => {
  return {
    type: TEXT_NODE,
    textNode,
  };
};

export const authorName = (name) => {
  return {
    type: CURRENT_AUTHOR,
    nameEntry: name,
  };
};

// export const reset = () => {
//   return {
//     type: RESET,
//     state,
//   };
// };

//thunk creator:
// export const fetchMessages = () => {
//   //thunk:
//   return async (dispatch) => {
//     try {
//       const response = await axios.get('/api/messages');
//       const messages = response.data;
//       // console.log('messagges---', messages);
//       dispatch(gotMessagesFromServer(messages));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const postNewMessage = (newMessage) => {
  return (dispatch) => {
    try {
      dispatch(gotNewMessageFromServer({ name: 'You', content: newMessage }));
      socket.emit('new-message', newMessage);
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTextNodeThunk = (textNode) => {
  return (dispatch) => {
    try {
      dispatch(updateTextNode(textNode));
      socket.emit('new-node', textNode);
    } catch (error) {
      console.log(error);
    }
  };
};

//initial state:
let initialState = {
  messages: [],
  newMessageEntry: '',
  nameEntry: '',
  textNode: {},
};

//reducer function:
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      return { ...state, messages: action.messages };
    case GOT_NEW_MESSAGE_FROM_SERVER:
      return { ...state, messages: [...state.messages, action.newMessage] };
    case WRITE_MESSAGE:
      return { ...state, newMessageEntry: action.newMessageEntry };
    case CURRENT_AUTHOR:
      return { ...state, nameEntry: action.nameEntry };
    case TEXT_NODE:
      return { ...state, textNode: action.textNode };

    default:
      return state;
  }
};

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(reducer, middleware);

export default store;
