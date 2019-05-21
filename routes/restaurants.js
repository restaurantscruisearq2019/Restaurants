const express = require("express");
const mongoose = require("mongoose");

const Restaurant = mongoose.model("restaurants");

module.exports = app => {
  app.get("/restaurants", (req, res) => {
    const query = req.query;
    Restaurant.find(query)
      .then(restaurants => {
        res.json({
          confirmation: "success",
          data: restaurants
        });
      })
      .catch(err => {
        res.json({
          confirmation: "fail",
          message: err.message
        });
      });
  });

  app.post("/restaurants/add", (req, res) => {
    const data = req.query;
    new Restaurant(data)
      .save()
      .then(restaurant => {
        res.json({
          confirmation: "success",
          data: restaurant
        });
      })
      .catch(err => {
        res.json({
          confirmation: "fail",
          message: err.message
        });
      });
  });

  app.get("/restaurants/update/:id", (req, res) => {
    const updateDetails = req.query;
    const restaurantId = req.params.id;

    Restaurant.findByIdAndUpdate(restaurantId, updateDetails, { new: true })
      .then(restaurant => {
        res.json({
          confirmation: "success",
          data: restaurant
        });
      })
      .catch(err => {
        res.json({
          confirmation: "fail",
          message: err.message
        });
      });
  });

  app.get("/restaurants/delete/:id", (req, res) => {
    const restaurantId = req.params.id;

    Restaurant.findByIdAndDelete(restaurantId)
      .then(restaurant => {
        res.json({
          confirmation: "success",
          data: restaurant
        });
      })
      .catch(err => {
        res.json({
          confirmation: "fail",
          message: err.message
        });
      });
  });

  app.get("/restaurants/:id", (req, res) => {
    Restaurant.findById(req.params.id)
      .then(restaurant => {
        res.json({
          confirmation: "success",
          data: restaurant
        });
      })
      .catch(err => {
        res.json({
          confirmation: "fail",
          message: err.message
        });
      });
  });
};
