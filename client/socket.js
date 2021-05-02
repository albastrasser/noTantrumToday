import io from 'socket.io-client';
import { gotNewMessageFromServer, updateTextNode } from '../client/store';
import store from '../client/store';

const socket = io(window.location.origin);

socket.on('connect', () => {
  console.log('I am now connected to the server!');

  const name = prompt('What is your name?');
  store.dispatch(gotNewMessageFromServer({ content: 'You joined' }));
  socket.emit('new-user', name);

  socket.on('new-message', ({ content, name }) => {
    store.dispatch(gotNewMessageFromServer({ name, content }));
  });

  socket.on('new-node', (newNode) => {
    store.dispatch(updateTextNode(newNode));
  });

  socket.on('user-connected', (name) => {
    store.dispatch(gotNewMessageFromServer({ content: `${name} connected` }));
  });

  socket.on('user-disconnected', (name) => {
    store.dispatch(
      gotNewMessageFromServer({ content: `${name} disconnected` })
    );
  });
});

export default socket;
