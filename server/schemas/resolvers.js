const { AuthenticationError } = require('apollo-server-express');
const { User, Guide, Subscription, Message } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  // All queries are untested
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
        .select('-__v -password')
        .populate('guides')
        .populate('subscription');

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    guides: async (parent, args, context) => {
      if(context.user) {
        const allUserGuidesData = await User.findOne(context.user._id).populate('guides');
        return allUserGuidesData;
      }

    },
    guide: async (parent, args, context) => {
      return await Guide.findOne({_id});
    },
    subsription: async (parent, args, context) => {
      return await User.findOne({_id}).populate('subscription');
    }
    // messages: async (parent, args, context) => {
    //   return Message.find()
    //   .populate('guide');
    // }
  },
  // Some mutations are untested
  Mutation: {
    // TESTED & WORKING
    addUser: async (parent, args) => {
      console.log('hello')
      const user = await User.create(args);
      const token = signToken(user);
      console.log('SIGNED UP ' + token, user);
      return { token, user };
    },
    // TESTED & WORKING
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      
      return { token, user };
    },
    addGuide: async (parent, args, context) => {
      if (context.user) {
        const guide = await Guide.create({ name: args.name, address: args.address, photo: args.photo, contactPhone: args.contactPhone });
        console.log('GUIDE: ' + guide);

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { guides: guide._id} },
          { new: true }
        );
        return guide;
      }
      
    },
    addCategory: async (parent, args, context) => {
      const updatedGuide = await Guide.findOneAndUpdate(
        { _id: args.guideId },
        { $push: { categories: { name: args.name, description: args.description } } },
        { new: true }
      ).populate('categories');
      return updatedGuide;
    },
    addSubscription: async (parent, args, context) => {
      if(context.user){
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: {subscription: { name: args.name, propertiesAllowed: args.propertiesAllowed, startDate: args.startDate, endDate: args.endDate } } },
          { new: true }
        ).populate('subscription');

        return updatedUser;
      }
    }
  }
};

module.exports = resolvers;