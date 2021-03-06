const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcryptjs = require('bcryptjs');
const subscriptionSchema = require('./Subscription');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 40
  },
  phone: {
    type: String,
    maxLength: 12
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 40
  },
  subscription: [subscriptionSchema],
  subscriptionStatus: {
      type: String
  },
  guides: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Guide'
    }
  ]
});

userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcryptjs.hash(this.password, saltRounds);
  }

  next();
})

userSchema.methods.isCorrectPassword = async function(password) {
  return await bcryptjs.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;