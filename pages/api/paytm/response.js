// pages/api/paytm/response.js

import { PaytmChecksum } from "paytmchecksum";

export default async function handler(req, res) {
  const paytmChecksum = req.body["head"]["signature"];
  const paytmParams = { ...req.body };
  delete paytmParams["head"]["signature"];

  let isValidChecksum = await PaytmChecksum.verifySignature(
    paytmParams,
    "<MERCHANT_KEY>",
    paytmChecksum
  );

  if (isValidChecksum) {
    console.log("Checksum Matched");
  } else {
    console.log("Checksum Mismatched");
  }

  res.json(isValidChecksum);
}
