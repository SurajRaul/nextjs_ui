import logger from "@/lib/middleware/logger";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// calling middleware
function withLogger(
  req: NextApiRequest,
  res: NextApiResponse,
  handler: () => void
) {
  logger(req, res, handler);
}

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  console.log(`Fetching post with ID: ${id}`);

  return new Promise((resolve) => {
    withLogger(req, res, async () => {
      const post = {
        id,
        title: "Sample Post",
        content: "This is a sample post.",
      };

      resolve(NextResponse.json(post));
    });
  });
}
