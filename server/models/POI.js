const mongoose = require('mongoose');
const { Schema } = mongoose;

//things like 'contact info'  'wifi info'
const poiSchema = new Schema({
  name: {
    type: String,
    trim: true,
    maxlength: 40
  },
  lat:{
    type: Number
  },
  lng: {
    type: Number
  }
});

module.exports = poiSchema;