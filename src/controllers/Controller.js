import _ from 'lodash';
import axios from 'axios';

const SERVER_URL = 'http://127.0.0.1:3000';
const endpoints = {
  messages: '/messages',
  users: '/users',
  channels: '/channels'
}


class Controller {
  constructor() {
    //console.log('this do be getting made doe!! UwU');

  }

  post(endpoint, body) {

    console.log("this do be getting run doe", endpoints[endpoint]);
    let args = [SERVER_URL + endpoint, body];
    console.log(args);
    axios.post.apply(this, args)
      .then((res) => {
        console.log(res);
        console.log(res.headers);
      }).catch(err => console.log(err));

  }

}

export default Controller;