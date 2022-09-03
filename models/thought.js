const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction");

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
      min_length: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  if (this.reactions.length == undefined) 
  {return 0;}
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
