const {Schema, model} = require('mongoose');


//schema for User model
const userSchema = new Schema(
     {
      username: {
        type: String, 
        unique: true,
        required: true, 
        trim: true 
      },
      email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator:() => Promise.resolve(false),
          message:'Email validation failed'
        }
    },
    thoughts: {
      idValues: {
        userId: {
        type: Schema.Types.ObjectId,
        ref:"thoughtsSchema",
        required: true
      }
      }
    },
    friends: {
      idValues: {
        userId: {
          type: Schema.Types.ObjectId,
          ref:"userSchema",
          required: true
        }
      }
        
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false
    }
);

// logic for email validation
user.email = 'test@test.co';
user.name = 'test';

let error;
try {
  await user.validate();
} catch (err) {
  error = err;
}
assert.ok(error);
assert.equal(error.errors['name'].message, 'Oops!');
assert.equal(error.errors['email'].message, 'Email validation failed');

// 
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// initialize user model:


module.export = Users;