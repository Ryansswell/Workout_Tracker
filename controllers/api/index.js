const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

router.use("/workouts", apiRoutes);

module.exports = router;