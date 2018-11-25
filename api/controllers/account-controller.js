const mongoose = require('mongoose'),
  Account = mongoose.model('Account'),
  jwt = require('jsonwebtoken'),
  bcrypt = require('bcrypt');

exports.allAccounts = function (req, res) {
  Account.find({}, function (err, accounts) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(accounts);
  });
}

exports.addAccount = function (req, res) {
  let newAccount = new Account(req.body);
  newAccount.save(function (err, account) {
    if (err) {
      res.send(err);
    }
    res.status(200).send(account);
  })
}

exports.getAccountByUser = function (req, res) {
  Account.findOne({'phoneNumber': req.body.phoneNumber}, (err, account) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(account);
  })
}