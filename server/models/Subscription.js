const mongoose = require('mongoose');
const { Schema } = mongoose;

const subscriptionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 40
  },
  propertiesAllowed: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    default: Date.now,
  }
})

module.exports = subscriptionSchema;