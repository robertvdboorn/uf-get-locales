import { NextApiRequest, NextApiResponse } from "next";
import { getProjectLocales } from "../../lib/uniform/sdk";
import { uniformProjectId } from "@/lib/utils/env";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const locales = await getProjectLocales(uniformProjectId as string);
    return res.status(200).json({ locales });
  } catch (error) {
    console.error("Error in /api/locales:", error);
    return res.status(500).json({ error: "Failed to retrieve locales." });
  }
}
