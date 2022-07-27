const { AuthenticationError } = require('apollo-server-express');
const { User, Guide, Subscription, Message } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  // All queries are untested
  Query: {
    // WORKS
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
    //might need to be changed
    clientUser: async (parent, args, context) => {
      console.log('hi');
      console.log(args);
        const user = await User.findOne(
          { _id: args.userId }
        )
        .select('-__v -password')
        .populate('subscription')
        .populate('guides')
        ;
        console.log(user);

        return user;
    },
    
    guides: async (parent, args, context) => {
      if(context.user) {
        const allUserGuidesData = await User.findOne(context.user._id).populate('guides');
        return allUserGuidesData;
      }

    },
    //works
    guide: async (parent, args, context) => {
      console.log(args);
      const guide = await Guide.findById(
        { _id: args.guideId },
        
        )
      .populate('categories')
      .populate('poi');
      console.log('GUIDE');
      console.log(guide);
      return guide;
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
      console.log(args);
      console.log('hello')
      const user = await User.create(args);
      const token = signToken(user);
      console.log(user);
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
    // TESTED & WORKING
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
    //WORKS
    updateGuideTitle: async (parent, args, context) => {
      const updatedGuide = await Guide.findOneAndUpdate(
        { _id: args.guideId },
        { $set: { name: args.name } },
        { new: true }
      ).populate('categories')
      .populate('poi');
      return updatedGuide;
    },
    updateGuideAddress: async (parent, args, context) => {
      const updatedGuide = await Guide.findOneAndUpdate(
        { _id: args.guideId },
        { $set: { address: args.address } },
        { new: true }
      ).populate('categories')
      .populate('poi');
      return updatedGuide;
    },
    deleteGuide: async (parent, args, context) => {
      if(context.user) {
        const deletedGuide = await Guide.findOneAndDelete(
          { _id: args.guideId }
        );
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: {guides: { _id: args.guideId } } },
          { new: true }
        );
        console.log(updatedUser);
        return updatedUser;
      }
      
    },
    // WORKS 
    addCategory: async (parent, args, context) => {
      const updatedGuide = await Guide.findOneAndUpdate(
        { _id: args.guideId },
        { $push: { categories: { name: args.name, description: args.description, icon: args.icon } } },
        { new: true }
      ).populate('categories')
      .populate('poi');
      return updatedGuide;
    },
    //works
    updateCategory: async (parent, args, context) => {
      const guideId = args.guideId
      const categoryId = args.categoryId;

      const updatedGuide = await Guide.findOneAndUpdate(
        { "_id": guideId, "categories._id": categoryId },
        { $set: { "categories.$.name": args.name, "categories.$.description": args.description } },
        { new: true }
      ).populate('categories')
      .populate('poi');
      return updatedGuide;
    },
    deleteCategory: async (parent, args, context) => {
      const updatedGuide = await Guide.findByIdAndUpdate(
        { _id: args.guideId },
        { $pull: {categories: {_id: args.categoryId } } },
        { new: true }
      ).populate('categories')
      .populate('poi');
      return updatedGuide;
    },
    addPoi: async (parent, args, context) => {
      const updatedGuide = await Guide.findOneAndUpdate(
        { _id: args.guideId },
        { $push: { poi: { name: args.name, type: args.type, address: args.address, lat: args.lat, lng: args.lng } } },
        { new: true }
      );
      return(updatedGuide);
    },
    updatePoi: async (parent, args, context) => {
      const updatedGuide = await Guide.findOneAndUpdate(
        { _id: args.guideId, "poi.name": args.name },
        { $set: { "poi.$.lat": args.lat, "poi.$.lng": args.lng } },
        { new: true }
      ).populate('categories')
      .populate('poi');
      return updatedGuide;
    },
    deletePoi: async (parent, args, context) => {
      const updatedGuide = await Guide.findOneAndUpdate(
        { _id: args.guideId },
        { $pull: { poi: { _id: args.poiId } } },
        { new: true }
      ).populate('categories')
      .populate('poi');
      return updatedGuide;
    },
    // WORKS
    addSubscription: async (parent, args, context) => {
      console.log(args);
      if(context.user){
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { subscription: { propertiesAllowed: args.propertiesAllowed, startDate: args.startDate, endDate: args.endDate, price: args.price } } },
          { new: true }
        ).populate('subscription');
        return updatedUser;
      }
    },
    deleteSubscription: async (parent, args, context) => {
      if(context.user){
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { subscription: { _id: args.subscriptionId } } },
          { new: true }
        );
        console.log(updatedUser);
        return updatedUser;
      }
    }
  }
};

module.exports = resolvers;