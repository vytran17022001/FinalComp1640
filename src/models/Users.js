const mongoose = require("mongoose");

const Users = new mongoose.Schema(
  {
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    closedate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CloseDates",
    },
    articles: { type: mongoose.Schema.Types.ObjectId, ref: "Article" },
    facultis: { type: mongoose.Schema.Types.ObjectId, ref: "Facultis" },
    facultyWant: String,
    name: String,
    roleTreatment: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: Number,
    address: String,
    img: { type: String, default: "images.jpeg" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", Users);
