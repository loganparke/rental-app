const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
  guide: {
    type: Schema.Types.ObjectId,
      ref: 'Guide',
      required: true
  },
  writer: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;