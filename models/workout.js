const mongoose = require("mongoose");

const { Schema } = mongoose;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                trim: true,
                required: true

            },
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        },
    ],
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;