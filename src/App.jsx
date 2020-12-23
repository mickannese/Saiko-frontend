import React from 'react';
import Search from './Search.jsx';
import MessageList from './message-comps/MessageList.jsx';
import MessageBox from './message-comps/MessageBox.jsx';
import ChannelList from './channel-comps/ChannelList.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    console.log('this do be gettin runnined ');
    props.controller.post('/channels', { channelName: 'lobby' });
    this.state = {
      renderList: props.messages,
      userInfo: props.userInfo,
      mainMessageDraft: '',
      searchQuery: '',
      currentSearch: '',
      messageToSend: '',
      currentChannel: 'home'
    };
  }


  // message functions
  handleMessageInput(event) {
    event.preventDefault();
    this.setState({
      mainMessageDraft: event.target.value
    });
  };

  handleMessageSubmit(event) {
    event.preventDefault();
    this.setState({
      messageToSend: this.state.mainMessageDraft,
      mainMessageDraft: ''
    });
  }


  // search funcitons
  handleSearchInput(event) {
    event.preventDefault();
    this.setState({
      searchQuery: event.target.value
    });
  };

  handleSearchSubmit(event) {
    event.preventDefault();
    this.setState({
      currentSearch: this.state.searchQuery,
      searchQuery: ''
    });
  };

  channelSelector(value) {
    console.log('click');
    var self = this;
    return function handleChannelSelect(event) {
      if (value !== self.state.currentChannel) {
        self.setState({
          currentChannel: value
        })
      }
    }

  }

  render() {
    return (
      <div className="big-container">
        <div className="navbar">
          <Search
            update={this.handleSearchInput.bind(this)}
            submit={this.handleSearchSubmit.bind(this)}
            current={this.state.searchQuery}
          />
        </div>
        <div className="horizontal-plane">
          <div className="sidebar">
            <h1>
              SCREEEEEE
          </h1>
            <div className="channel-container">
              <ChannelList channels={this.state.userInfo.channels} current={this.state.currentChannel} selectCurrent={this.channelSelector.bind(this)} />
            </div>
          </div>
          <div className="message-container">
            <div className="messages-block">
              <MessageList messages={this.state.renderList} currentChannel={this.state.currentChannel} />
            </div>
            <div>
              <MessageBox
                update={this.handleMessageInput.bind(this)}
                submit={this.handleMessageSubmit.bind(this)}
                current={this.state.mainMessageDraft}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;