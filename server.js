const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/Workout_Tracker",
    {
        useNewUrlParser: true,
    }
);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
});