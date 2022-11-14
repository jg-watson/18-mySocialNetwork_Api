const User = require('../models/User');

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

// update user by id
updateUser(req, res) {
    User.findOneAndUpdate(
        {_id: req.params.userId},
        {$set: req.body},
        {runValidators: true, new:true}
    )
    .then((user) =>
    !user
        ? res.status(404).json({message: 'User not found!'})
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},

// delete user by id: do we need to delete many? 
deleteUser(req,res) {
    User.findOneAndDelete({_id: req.params.userId})
    .then((user) =>
    !user
        ?res.status(404).json({message: 'User id does not match!'})
        : res.json(user)
    )
    .then(() => res.json({message: 'User deleted!'}))
    .catch((err) => res.status(500).json(err));
}

//add new friend from user friend list

//remove friend from user's friend list

};