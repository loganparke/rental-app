const mongoose = require('mongoose');
const { Schema } = mongoose;

//things like 'contact info'  'wifi info'
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 40
  },
  description:{
    type: String,
    required: true,
    maxlength: 200
  }
});

module.exports = categorySchema;