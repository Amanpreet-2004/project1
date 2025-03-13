
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
 type: { type: String, required: true }
});


const value = mongoose.model('value', userSchema);


module.exports = value;
