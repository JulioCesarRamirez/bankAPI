const monoose = require('mongoose'),
  User = monoose.model('User'),
  jwt = require('jsonwebtoken'),
  bcrypt = require('bcrypt');

exports.allUsers = function (req, res) {
  User.find({}, function (err, user) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(user);
  });
}

exports.addUser = function (req, res) {
  let newUser = new User(req.body);
  newUser.save(function (err, user) {
    if (err) {
      res.send(err);
    }
    let token = jwt.sign({ name: user.name, status: user.status }, 'secret');
    res.status(200).send({ auth: true, token: token });
  })
}

exports.getUserById = function (req, res) {
  User.findById(req.body.userName, (err, user) => {
    if (err) {
      res.status(404).send(err);
    }
    let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (passwordIsValid) return res.status(401).send({ auth: false, token: null });
    // create a token
    let token = jwt.sign({ name: user.name, status: user.status }, 'secret');
    res.status(200).send({ auth: true, token: token });
  })
}