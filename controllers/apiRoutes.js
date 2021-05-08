const router = require("express").Router();
const db = require("../models");


router.get("/workouts", async (req, res) => {
    try {
        const lastWorkout = await db.Workout.aggregrate({
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
            },
        });
        res.status(200).json(lastWorkout);
    } catch (error) {
        res.status(500);
    }
});


router.get("/workouts/range", async (req, res) => {
    try {
        const lastWorkout = await db.Workout.find({});
        const goBack = lastWorkout.goBack({});
        res.status(200).json(lastWorkout);
    } catch (error) {
        res.status(500);
    }
});

router.put("/workouts/:id", async (req, res) => {
    try {
        const newWorkout = await db.Workout.find({});
        const goBack = lastWorkout.goBack({});
        res.status(200).json(lastWorkout);
    } catch (error) {
        res.status(500);
    }
});



module.exports = router;