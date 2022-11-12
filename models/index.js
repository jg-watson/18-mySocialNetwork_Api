const router = require('express').Router();
const User = require('./User');
const Thought = require('./Thought');

router.use('/user', userRoutes);
router.use('.thoughts', thoughtRoutes);

module.exports = {User, Thought};