import React from 'react';
import Main from './Router.jsx';

class Saiko extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="saiko-main-render">
        <Main />
      </div>
    )
  }

}

export default Saiko;