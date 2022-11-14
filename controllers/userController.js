const {User, Thought} = require('../models');

module.exports = {
// get all users
getUser(req, res) {
    User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
},

// get single user by _id
getSingleUser(req, res) {
    User.findById({_id: req.params.userId})
    .select('-__v')
    .then((user) =>
        !user
        ?res.status(404).json({message:'User Id not found'})
        :res.json(user)
    )
    .catch*((err) => res.status(500).json(err));
},

// create user
createUser(req, res) {
    User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
    },
};