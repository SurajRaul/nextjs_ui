import { NextApiRequest, NextApiResponse } from "next";

export default function logger(
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  next();
}
