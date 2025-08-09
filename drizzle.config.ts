import { defineConfig } from "drizzle-kit";
import { url } from "inspector";

export default {
  dialect: "postgresql",
  schema: "./database/schema.ts",
  out: "./drizzle",
  dbCredentials: {
      url: process.env.DATABASE_URL
  }
};