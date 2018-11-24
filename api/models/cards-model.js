const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CardSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId
  },
  name: {
    type: String
  },
  amout: {
    type: Number
  },
  type: {
    type: String
  },
  status: {
    type: Number
  },
  userId: {
    type: String
  }
});

module.exports = mongoose.model('Card', CardSchema);