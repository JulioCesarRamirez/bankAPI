const mongoose = require('mongoose'),
Card = mongoose.model('Card');

exports.allCards = function (req, res) {
  Card.find({}, function (err, Cards) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(Cards);
  });
}

exports.addCard = function (req, res) {
  let newCard = new Card(req.body);
  newCard.save(function (err, card) {
    if (err) {
      res.send(err);
    }
    res.status(200).send(card);
  })
}

exports.getCardByUser = function (req, res) {
  Card.findOne({'phoneNumber': req.body.phoneNumber}, (err, card) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(card);
  })
}