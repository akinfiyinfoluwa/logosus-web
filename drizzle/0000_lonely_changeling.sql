CREATE TABLE "blog" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"author" text NOT NULL,
	"date" text NOT NULL,
	"author_image_url" text DEFAULT '/image/author1.jpeg' NOT NULL,
	"post_url" text NOT NULL,
	"article_body" text,
	"published" boolean DEFAULT false NOT NULL
);
