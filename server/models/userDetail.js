const mongoose = require('mongoose');
const log = require("loglevel");


const UserDetailSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
    }
});

module.exports = mongoose.model('UserDetail', UserDetailSchema);