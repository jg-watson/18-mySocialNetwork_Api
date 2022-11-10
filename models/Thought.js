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
    date:,
    timestamps: true
},
userName: {
    type: String,
    required: true
},
reactions: {
    type: String,
},
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

modules.export = Thoughts;