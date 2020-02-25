const router = require("express").Router();
const db = require("../models");
const express = require("express");
const app = express();
const path = require("path");

app.get("/api/workouts", (req, res) => {
  db.workout.find()
    .then(dbTransaction => {
      console.log(dbTransaction, '<==============================')
      res.json(dbTransaction)
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
  db.workout.find({})
    .then(dbTransaction => {
      console.log(dbTransaction, '<==============================')
      res.json(dbTransaction)
      console.log("success")
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.post("/api/workouts", (req, res) => {
  workout.create({})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.json(err);
    });
});

app.put("/api/workouts/:id", (req, res) => {
  db.workout.findByIdAndUpdate(
    req.params.id,
    { $push: { workouts: req.body }}
  )
    .then(dbTransaction => {
      console.log("accomplished")
      res.json(dbTransaction)
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "../../public/index.html"));
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "../../public/exercise.html"));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "../../public/stats.html"));
});



module.exports = app;
