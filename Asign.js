
const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
 type: { type: String, required: true }
});


const submit = mongoose.model('submit', adminSchema);


module.exports = submit;