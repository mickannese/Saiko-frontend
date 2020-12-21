import React from 'react';
import Search from './Search.jsx';
import MessageList from './message-comps/MessageList.jsx';
import MessageBox from './message-comps/MessageBox.jsx';
import ChannelList from './channel-comps/ChannelList.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <div>
        <Search />
        <h1>
          SCREEEEEE
        </h1>
      </div>
    );
  }
}

export default App;