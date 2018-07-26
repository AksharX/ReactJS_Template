const mongoose = require('mongoose');
const User = require("./user");


const GatheringSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    adminUsers: [User],
    members: [User],
    location : String
  });

  module.exports = mongoose.model('Gathering', GatheringSchema);