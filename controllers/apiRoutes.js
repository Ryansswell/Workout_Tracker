const router = require("express").Router();
const db = require("../models");


router.get("/workouts", async (req, res) => {
    try {
        const lastWorkout = await db.Workout.find({});
        res.status(200).json(lastWorkout);
    } catch (error) {
        res.status(500);
    }
});


router.get("/workouts/range", async (req, res) => {
    try {
        const lastWorkout = await db.Workout.find({});
        const goBack = await db.goBack.find({});
        res.status(200).json(lastWorkout);
    } catch (error) {
        res.status(500);
    }
});