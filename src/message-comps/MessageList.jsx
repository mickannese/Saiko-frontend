import React from 'react';
import MessageEntry from './MessageEntry.jsx';

var MessageList = (props) => {


  return (
    <div className="msg-list">
      {props.messages.map(message => {
        if (message.channel === props.currentChannel) {
          return (
            <MessageEntry
              message={message}
              key={message.text}
            />
          );
        }
      })}
    </div>
  );
};

export default MessageList;