// models/Donation.js

import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  name: String,
  email: String,
  amount: Number,
  cause: String,
  phoneNumber: String,
});

const Donation =
  mongoose.models.Donation || mongoose.model("Donation", donationSchema);
export default Donation;
