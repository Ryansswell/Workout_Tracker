let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});


let workoutSeedData = [
  {
    day: new Date().setDate(new Date().getDate() - 10),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 9),
    exercises: [
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 8),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 7),
    exercises: [
      {
        type: "resistance",
        name: "Squats",
        duration: 12,
        weight: 225,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 8),
    exercises: [
      {
        type: "resistance",
        name: "Clean and Press",
        duration: 15,
        weight: 135,
        reps: 8,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 7),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 35,
        distance: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 6),
    exercises: [
      {
        type: "resistance",
        name: "Skull Crushers",
        duration: 20,
        weight: 85,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 5),
    exercises: [
      {
        type: "resistance",
        name: "Leg Curls",
        duration: 20,
        weight: 150,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      {
        type: "resistance",
        name: "Leg Press",
        duration: 30,
        weight: 450,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [
      {
        type: "resistance",
        name: "DeadLift",
        duration: 25,
        weight: 320,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeedData))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
