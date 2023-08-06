// pages/api/paytm/request.js

import { PaytmChecksum } from "paytmchecksum";

export default async function handler(req, res) {
  const { amount, orderId } = req.body;

  let paytmParams = {};

  paytmParams["body"] = {
    requestType: "Payment",
    mid: "<MERCHANT_ID>",
    websiteName: "WEBSTAGING",
    orderId: orderId,
    callbackUrl: "http://localhost:3000/api/paytm/response",
    txnAmount: {
      value: amount,
      currency: "INR",
    },
    userInfo: {
      custId: "CUST_001",
    },
  };

  let checksum = await PaytmChecksum.generateSignature(
    JSON.stringify(paytmParams["body"]),
    "<MERCHANT_KEY>"
  );

  paytmParams["head"] = {
    signature: checksum,
  };

  res.json(paytmParams);
}
