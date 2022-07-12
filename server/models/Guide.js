const mongoose = require('mongoose');
const { Schema } = mongoose;
const Category = require('./Category');

const guideSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 40
  },
  address: {
    type: String,
    required: true,
    maxlength: 60
  },
  photo: {
    type: String
  },
  contactPhone: {
    type: String
  },
  //things like 'contact info'  'wifi info'
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }
  ]
});

const Guide = mongoose.model('Guide', guideSchema);

module.exports = Guide;