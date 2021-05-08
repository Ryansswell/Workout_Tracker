const router = require("express").Router();
const db = require("../../models");


router.get("/", async (req, res) => {
    try {
        const lastWorkout = await db.Workout.aggregrate({
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
            },
        });
        res.status(200).json(lastWorkout);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const oneMore = await db.Workout.create(req.body);
        res.status(200).json(oneMore);
    } catch (error) {
        res.status(500);
    }
});


router.get("/range", async (req, res) => {
    try {
        const range = await db.Workout.find({});
        reverse = range.reverse();
        // const goBack = lastWorkout.goBack({});
        res.status(200).json(reverse);
    } catch (error) {
        res.status(500);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const newWorkout = await db.Workout.findIdAndUpdate(req.params.id,
            { $push: { exercises: req.body } },
            { new: true, runValidators: true }
        );
        res.status(200).json(newWorkout);
    } catch (error) {
        res.status(500).json(error);
    }
});



module.exports = router;