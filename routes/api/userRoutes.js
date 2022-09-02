const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  createUser,
} = require("../../controllers/userController");

// GET all /api/users/
router.route("/").get(getUsers);

// GET by id /api/users/:_id
router.route("/:_id").get(getSingleUser);

// POST /api/users/:_id
router.route("/:_id").post(createUser);

// PUT by id /api/users/:_id
router.route("/:_id").put(updateUser);

// DELETE by id /api/users/:_id
router.route("/:_id").delete(deleteUser);

module.exports = router;
