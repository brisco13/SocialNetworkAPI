const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts/
router
  .route("/")
  // Get all
  .get(getThoughts)
  //create new thought
  .post(createThought);

// /api/thoughts/:id
router
  .route("/:thoughtId")
  // get by id
  .get(getSingleThought)
  // update by id
  .put(updateThought)
  // delete by id
  .delete(deleteThought);

// /api/thoughts/:thoughtID/reactions
router
  .route("/:thoughtId/reactions")
  // add reaction
  .post(addReaction)

router
  .route("/:thoughtId/reactions/:reactionId")
  // add reaction
  .post(addReaction)
  // remove a reaction
  .delete(removeReaction);

module.exports = router;
