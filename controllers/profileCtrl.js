const profiles = [{
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {
  getFriendsProperties: function(req, res, next) {
    const currentUser = req.session.currentUser;
    const friendsarr = currentUser.friends;
    const friends = [];
    for(var i = 0; i < friends.length; i++) {
      for(varj = 0; j < profiles.length; i++) {
        if(friends[i] === profiles[i].name) {
          friends.push(profiles[i].name)
        }
      }
    }
    res.send({
      currentUser: currentUser;
      friends: friends;
    })
  }
}
