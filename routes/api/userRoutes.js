const router = require('express').Router();

const{
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,

} = require('../../controllers/userController');

//api/user get and post
router.route('/').get(getUser).post(createUser);

// api/user by id:
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);


module.exports = router;