const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;
const log        = require("loglevel");
const Gatherings = require("./gatherings");
const User       = require("./user"); 


const UserDetailSchema = new mongoose.Schema({
  User:{
    type: Schema.Types.ObjectId,
    ref: "Gathering",
    unique: true,
    required: true,
  },
  
  gatheringsAdmin: [{ type: Schema.Types.ObjectId, ref:"Gathering" }],
  
  gatheringsInvited: [{ type: Schema.Types.ObjectId, ref:"Gathering" }],
  
});

module.exports = mongoose.model('UserDetail', UserDetailSchema);