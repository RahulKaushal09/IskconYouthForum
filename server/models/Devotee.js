const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const devoteeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  address: {
    type: String,
  },
  mentor: {
    type: String,
  },
  dob: {
    type: Date,
  },
  role: {
    type: Number,
  },
});

// devoteeSchema.pre("save", async function () {
//   this.password = await bcrypt.hash(this.password, 12);
// });

module.exports = mongoose.model("Devotee", devoteeSchema);
