

import { config } from "dotenv";
import { drizzle } from 'drizzle-orm/neon-http';
import { DotenvConfigOptions } from "dotenv";

config({ path: ".env" }); // or .env.local

export const db = drizzle(process.env.DATABASE_URL!);
