const express = require("express");
const mongoose = require("mongoose");
const router = require("./controllers");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const app = express();

// app.post("/api/index", async (req, res) => {
//     const newAccount = await workout.create(req.body);
//     res.json(newAccount)
// });

// app.post("/api/index/:id", async (req, res) => {
//     const result = await workout.findByIdAndUpdate(req.body);

//     res.json(result)
// });

// app.get("/api/accounts", async (req, res) => {
//     const accounts = await 
// })


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/Workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(router);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
});