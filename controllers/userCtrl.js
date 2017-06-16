var users = [{
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preson McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: "777mittens777",
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function (req, res, next) {
    const username = req.body.name;
    const password = req.body.password;
    for(var i = 0; i < users.length; i++) {
      if(username === users[i].name && password === users[i].password) {
        req.session.currentUser = users[i];
        return res.send({userFound: true});
      }
      else {
        return res.send({userFound: false});
      }
    }
  }
};
