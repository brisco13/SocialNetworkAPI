const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
} = require("../../controllers/thoughtController");

// GET all /api/thoughts/
router.route("/").get(getThoughts);

// GET by id /api/thoughts/
router.route("/:_id").get(getSingleThought);

// POST /api/thoughts/
router.route("/:_id").post(createThought);

// PUT by id /api/thoughts/
router.route("/:_id").put(updateThought);

// DELETE by id /api/thoughts/
router.route("/:_id").delete(deleteThought);

module.exports = router;
