const router = require('express').Router;

const{
    getUser,
    getSingleUser,
    createUser,

} = require('../../controllers/userController');

//api/user get and post
router.route('/').get(getUser).post(createUser);

// api/user by id
router.route('/:userId').get(getSingleUser);


module.exports = router;