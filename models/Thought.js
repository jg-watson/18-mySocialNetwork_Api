const {Schema, model} = require('mongoose');

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
reactions: []

    },
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

modules.export = Thoughts;