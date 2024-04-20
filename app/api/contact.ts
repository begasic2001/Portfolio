import type { NextApiRequest, NextApiResponse } from "next";

export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { name, email, comment } = req.body;
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
