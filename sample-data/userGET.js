var userGET = JSON.stringify({ userName: "Mick", channels: ['lobby', 'pizza', 'outside'] })
var userinfo = JSON.parse(userGET);

export default userinfo;


//emulating a get request from user given current rooms open on client (in channel list)