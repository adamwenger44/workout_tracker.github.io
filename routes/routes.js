const router = require("express").Router();
const db = require("../models");
const express = require("express");
const app = express();
const path = require("path");


router.post("/api/workouts", (req, res) => {
  db.workouts.create(req.body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  db.workout.find()
    .then(dbTransaction =>{
      console.log(dbTransaction, '<==============================')
      res.json(dbTransaction)
    } )
    .catch(err => {
      res.status(400).json(err);
    });
});
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "../public/index.html"));
// });

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "../public/exercise.html"));
});

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/transaction", (req, res) => {
//   Transaction.find({})
//     .sort({ date: -1 })
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;
