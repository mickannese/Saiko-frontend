import React from 'react';
import MessageEntry from './MessageEntry.jsx';

var MessageList = (props) => {
  return (
    <div className="msg-list">
      {props.messages.map(message => (

        <MessageEntry
          message={message}
          key={message.text}
        />
      ))}
    </div>
  );
};

export default MessageList;