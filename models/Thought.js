const {Schema, model} = require('mongoose');

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
    timestamp:,

},
userName: {
    type:String,
    required:true
},
reactions: {
    type:String,
    required: true
},
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

modules.export = Thoughts;