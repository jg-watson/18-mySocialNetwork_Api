const {Schema, model} = require('mongoose');



//Schema for User model
const userSchema = new Schema(
     {
      username: {
        type: String, 
        unique:true,
        required: true, 
        trimmed: 
      },
      email: {
        type: String,
        required: true,
        unique: true
    },
    thoughts: {

    }
    friends: {
        
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
});

module.export = Users;