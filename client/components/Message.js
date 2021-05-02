import React from 'react';

export default function Message(props) {
  const message = props.message;
  return (
    <li className="Message">
      <div className="media-body">
        <span className="author">{message.name}</span> {message.content}
      </div>
    </li>
  );
}
