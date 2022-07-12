const mongoose = require('mongoose');
const { Schema } = mongoose;

//things like 'contact info'  'wifi info'
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 40
  },
  description:{
    type: String,
    required: true,
    maxlength: 200
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;