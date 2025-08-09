import { integer, text, boolean, pgTable, serial } from "drizzle-orm/pg-core";

export const blog = pgTable("blog", {
  id: serial("id").primaryKey().notNull(),
  title: text("title").notNull(),
  article_body: text("article_body").notNull(), // main blog content
  author: text("author").notNull(),
  date: text("date").notNull(),
  description: text("description").notNull(),
  post_url: text("post_url").notNull(),
  published: boolean("published").default(false).notNull(),
});
