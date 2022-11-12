const {Schema, Types} = require('mongoose');

const reactionsSchema = new Schema(
{
reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
},
reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
},
username: {
    type: String,
    required: true,
},
createdAt: {
    type: Date,
    timestamps: { 
        type: Date,
        default: Date.now
    }
    },
},
{
    toJSON: {
        getters: true,
    },
        id: false,
    }
);

//exporting as a schema
module.exports = reactionsSchema;