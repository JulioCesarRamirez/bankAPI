const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId
  },
  name: {
    type: String
  },
  lastName: {
    type: String
  },
  secondLastName:{
    type: String
  },
  password: {
    type: String
  },
  accountNumber: {
    type: String
  },
  birthday: {
    type: Date
  },
  status:{
    type: String
  }
});

module.exports = mongoose.model('User', UserSchema);