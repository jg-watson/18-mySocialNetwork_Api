const {Schema, model} = require('mongoose');
const { virtual } = require('./Reactions');
const reactionsSchema = require('./Reactions');

//schema for thought model
const thoughtsSchema = new Schema(
    {
thoughtText: {
    type: String,
    required: true,
    minLength: 1, 
    maxLength: 280
},
createdAt:{
    timestamps: { 
        type: Date,
        default: Date.now
    }
},
userName: {
    type: String,
    required: true
},
reactions: [reactionsSchema], 
    },
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// virtual reactionCount
thoughtsSchema.virtual("reactionCount").get(function () {
return this.reactions.length;
});

// Initializing and exporting Thoughts model
const Thoughts = model('thoughts', thoughtsSchema,);

module.exports = Thoughts;