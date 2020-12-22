import React from 'react';


var ChannelEntry = (props) => {
  var current = (props.channel === props.current)
  console.log(current);

  return (
    <div className={current ? "selected-channel" : "channel-list-entry"} onClick={props.select(props.channel)}>
      {props.channel}
    </div>
  );
};

export default ChannelEntry;