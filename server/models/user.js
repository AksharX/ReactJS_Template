const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const log = require("loglevel");


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
    }
  });

  UserSchema.pre('save', function(next){
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(this.password, salt);
    this.password = hash
    next();
  })

  const handleE11000 = function(error, res, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
      next(new Error('Duplicate key error'));
    } else {
      next();
    }
  };
  UserSchema.post('save', handleE11000);
  UserSchema.post('update', handleE11000);
  UserSchema.post('findOneAndUpdate', handleE11000);
  UserSchema.post('insertMany', handleE11000);

module.exports = mongoose.model('User', UserSchema);