import React from 'react';

var MessageEntry = (props) => {
  return (
    <div>
      <div className="msg-entry-head">
        <div className="msg-entry-username">
          {props.message.userName}
        </div>
        <div>
          {props.message.time}
        </div>
      </div>
      <div className="msg-entry-body">
        {props.message.text}
      </div>
    </div>
  )

};

export default MessageEntry;