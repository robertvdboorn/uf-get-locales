export const uniformApiKey = process.env.UNIFORM_API_KEY;
export const uniformProjectId = process.env.UNIFORM_PROJECT_ID;

if (!uniformApiKey) {
  throw new Error("Missing environment variable: UNIFORM_API_KEY");
}

if (!uniformProjectId) {
  throw new Error("Missing environment variable: UNIFORM_PROJECT_ID");
}
