const { Schema, model } = require("mongoose");

// validate email regex
const validateEmail = function (email) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

// Schema to create a user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: "thought"
    },],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: "user"
    },],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("friendCount").get(function () {
  if (this.friends.length == undefined) 
  {return 0;}
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
