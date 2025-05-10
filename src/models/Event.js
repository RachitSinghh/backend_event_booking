const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true, 
    trim: true
  }, 
  description: String,
  date:{
    type: Date, 
    required: true, 
  }, 
  time: String, 
  venue: String,
  price:{
    type:Number, 
    required: true
  },
  totalSeats:{
    type: Number,
    required: true,
  }, 
  availableSeats:{
    type: Number, 
    required: true,
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
},{timeStamps: true});

module.exports = mongoose.model('Event', eventSchema);