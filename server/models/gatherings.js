const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const User     = require("./user");


const GatheringSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    adminMembers: [{ type: Schema.Types.ObjectId, ref:"User" }],
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    location : String,
    date: Date
  });

  module.exports = mongoose.model('Gathering', GatheringSchema);