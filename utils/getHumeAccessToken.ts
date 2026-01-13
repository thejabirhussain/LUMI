import 'server-only';

import { fetchAccessToken } from "hume";

export const getHumeAccessToken = async () => {
  const apiKey = process.env.HUME_API_KEY;
  const secretKey = process.env.HUME_SECRET_KEY;

  console.log("DEBUG: getHumeAccessToken called");
  console.log("DEBUG: Using API Key starting with:", apiKey?.substring(0, 5));

  if (!apiKey || !secretKey) {
    throw new Error('Missing required environment variables (HUME_API_KEY or HUME_SECRET_KEY)');
  }

  const tokenResult = await fetchAccessToken({
    apiKey: String(process.env.HUME_API_KEY),
    secretKey: String(process.env.HUME_SECRET_KEY),
  });

  // fetchAccessToken returns a string directly (28 characters is the correct format)
  if (typeof tokenResult !== 'string' || !tokenResult) {
    throw new Error(`Invalid token format. Expected string, got: ${typeof tokenResult}`);
  }

  return tokenResult;
};
