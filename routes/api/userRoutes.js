const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  createUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/users/
router
  .route("/")
  // get all users
  .get(getUsers)
  // create a new user
  .post(createUser);

// /api/users/:_id
router
  .route("/:userId")
  // Get single user by id
  .get(getSingleUser)
  // delete user by id
  .delete(deleteUser)
  // update user by id
  .put(updateUser);

// /api/users/:userID/friends/:friendID
router
  .route("/:userId/friends/:friendId")
  // add friend
  .post(addFriend)
  // delete friend
  .delete(deleteFriend);

module.exports = router;
