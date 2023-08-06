// pages/api/donations/index.js

import connectDb from "../../../utils/connectDb";
import Donation from "../../../models/Donation";

connectDb();

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, amount, cause, phoneNumber } = req.body;

    if (!name || !email || !amount || !cause || !phoneNumber) {
      return res.status(422).json({ message: "All fields are required" });
    }

    try {
      const newDonation = await new Donation({
        name,
        email,
        amount,
        cause,
        phoneNumber,
      }).save();
      res.status(201).json(newDonation);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default handler;
