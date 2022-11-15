const {ObjectId} = require('mongoose').Types;
const {Thought, User} = require('../models');


module.exports = {
//get all thoughts
getThoughts(req, res) {
    Thought.find()
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err));
},

//get a single thought by _id
getSingleThought(req, res) {
    Thought.findOne({_id: req.params.thoughtId})
    .select('-__v')
    .then((course) => 
    !thought
        ?res.status(404).json({message: 'Thoughts not found'})
        :res.json(thought)
    )
},

//create a new thought:push created thought's _id into into associated user's thoughts
createThought(req, res) {
    Thought.create(req.body)
    .then((thought) => res.json(thought))
    .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
},

//update thought by _id
updateThought(req, res) {
    Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$set: req.body},
        {runValidators: true, new:true}
    )
    .then((course) =>
        !thoughts
            ? res.status(404).json({message: 'Thought cannot be found'})
            : res.json(thoughts)
    )
    .catch((err) => res.status(500).json(err));
},

//remove thought by it's _id

deleteThought(req, res) {
Thought.findOneAndDelete({ _id: req.params.thoughtId})
.then((thought) =>
    !thought
    ? res.status(404).json({message: 'Thought id not found'})
    :res.json(thought)
    )
    .then(() => res.json({message: 'Thought deleted!'}))
    .catch((err) => res.status(500).json(err));
},
};