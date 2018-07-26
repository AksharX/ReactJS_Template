const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
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
    },
    passwordConf: {
      type: String,
      required: true,
    }
  });

  UserSchema.pre('save',(next) =>{
      const user = this;
      

  })

module.exports = mongoose.model('User', UserSchema);