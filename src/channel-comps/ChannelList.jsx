//overall list of open channels

import React from 'react';
import ChannelEntry from './ChannelEntry.jsx';

var ChannelList = (props) => {
  return (
    <div className="channel-list">
      {props.channels.map(channel => (
        <ChannelEntry channel={channel} key={channel} />
      ))}
    </div>
  );

};

export default ChannelList;