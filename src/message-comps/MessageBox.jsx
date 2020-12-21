import React from 'react';

var MessageBox = (props) => {
  return (
    <form className="message-bar" onSubmit={props.submit}>
      <input
        className="input-bar"
        value={props.current}
        type="text"
        name="search"
        onChange={props.update}
      />
    </form>
  )
}

export default MessageBox;