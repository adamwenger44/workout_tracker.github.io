const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newWorkout = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  type: {
    type: String,
    required: "Enter a type of workout"
  },
  weight: {
    type: Number,
  },
  sets: {
      type: Number,
  },
  reps: {
      type: Number,
      
  },
  duration: {
      type: Number,
      required: "how long is the workout?"
  }
});

const workout = mongoose.model("workout", newWorkout);

module.exports = workout;
