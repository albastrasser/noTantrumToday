import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

//action type:
const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';

//action creator:
export const gotMessagesFromServer = (messages) => {
  return {
    type: GOT_MESSAGES_FROM_SERVER,
    messages,
  };
};

//thunk creator:
export const fetchMessages = () => {
  //thunk:
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/messages');
      const messages = response.data;
      // console.log('messagges---', messages);
      dispatch(gotMessagesFromServer(messages));
    } catch (error) {
      console.log(error);
    }
  };
};

//initial state:
let initialState = {
  messages: [],
};

//reducer function:
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      return { ...state, messages: action.messages };
    default:
      return state;
  }
};

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(reducer, middleware);

export default store;
