const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
  description: String
});

module.exports = mongoose.model("Student", StudentSchema);
