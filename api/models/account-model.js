const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AccountSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId
  },
  phoneNumber:{
    type: String
  },
  products:{
    type: [String]
  },
  status:{
    type: String
  }
});

module.exports = mongoose.model('Account', AccountSchema);