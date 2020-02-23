const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newWorkout = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
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
  },
}]
},{
  toJSON: {
    virtuals: true
  }}
);

newWorkout.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercises) => {
    return total + exercises.duration;
  }, 0);
})

const Workout = mongoose.model("Workout", newWorkout);

module.exports = Workout;
