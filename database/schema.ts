import { integer, text, boolean, pgTable } from "drizzle-orm/pg-core";

export const blog = pgTable("blog", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(), // main blog content
  author: text("author").notNull(),
  date: text("date").notNull(),
  description: text("description").notNull(),
  post_url: text("post_url").notNull(),
  published: boolean("published").default(false).notNull(),
});
