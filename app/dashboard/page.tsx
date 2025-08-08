"use client";

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { BlogPost, dummyBlogData } from "@/lib/blogs";

type EditorMode = "raw" | "preview";

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function DashboardPage() {
  const [posts, setPosts] = useState<BlogPost[]>(() => [...dummyBlogData]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const startCreate = () => {
    setEditingId(null);
    setIsCreating(true);
  };

  const startEdit = (id: number) => {
    setIsCreating(false);
    setEditingId(id);
  };

  const cancelEditor = () => {
    setIsCreating(false);
    setEditingId(null);
  };

  const onDelete = (id: number) => {
    if (typeof window !== "undefined" && window.confirm("Delete this post? This is a local-only change.")) {
      setPosts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const onSave = (payload: Omit<BlogPost, "id" | "post_url"> & { id?: number; slug?: string; articleBody?: string }) => {
    const id = payload.id ?? (posts.length ? Math.max(...posts.map((p) => p.id)) + 1 : 1);
    const slug = (payload.slug && payload.slug.trim()) || slugify(payload.title || "post-" + id);
    const post: BlogPost = {
      id,
      title: payload.title,
      description: payload.description,
      author: payload.author,
      date: payload.date,
      authorImageUrl: payload.authorImageUrl,
      post_url: `/blog/${slug}`,
      articleBody: payload.articleBody ?? "",
    };

    setPosts((prev) => {
      const idx = prev.findIndex((p) => p.id === id);
      if (idx === -1) return [post, ...prev];
      const copy = [...prev];
      copy[idx] = post;
      return copy;
    });

    setIsCreating(false);
    setEditingId(null);
  };

  const editingPost = useMemo(() => posts.find((p) => p.id === editingId) || null, [editingId, posts]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">A</div>
            <h1 className="text-xl md:text-2xl font-geist tracking-tight text-gray-900">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">Back to site</Link>
            <button onClick={startCreate} className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium">New Post</button>
          </div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
        {(isCreating || editingPost) ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">{isCreating ? "Create Post" : "Edit Post"}</h2>
            <PostEditor
              initial={editingPost || undefined}
              onCancel={cancelEditor}
              onSave={onSave}
            />
          </div>
        ) : null}

        <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-900">Posts</h3>
            <div className="text-sm text-gray-500">{posts.length} total</div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
                  <th className="px-6 py-3" />
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {posts.map((p) => {
                  const slug = p.post_url.split("/").filter(Boolean).pop() || "";
                  const existsInSeed = dummyBlogData.some((d) => (d.post_url.split("/").filter(Boolean).pop() || "") === slug);
                  return (
                    <tr key={p.id} className="hover:bg-gray-50">
                      <td className="px-6 py-3">
                        <div className="text-sm font-medium text-gray-900">{p.title}</div>
                        <div className="text-xs text-gray-500 line-clamp-1 max-w-[500px]">{p.description}</div>
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-700">{p.author}</td>
                      <td className="px-6 py-3 text-sm text-gray-700">{new Date(p.date).toLocaleDateString()}</td>
                      <td className="px-6 py-3 text-sm text-gray-700">{slug}</td>
                      <td className="px-6 py-3">
                        <div className="flex items-center justify-end gap-2">
                          <Link href={existsInSeed ? `/blog/${slug}` : "/blog"} className="px-3 py-1.5 rounded-lg text-sm bg-gray-100 hover:bg-gray-200 text-gray-900">View</Link>
                          <button onClick={() => startEdit(p.id)} className="px-3 py-1.5 rounded-lg text-sm bg-indigo-600 hover:bg-indigo-700 text-white">Edit</button>
                          <button onClick={() => onDelete(p.id)} className="px-3 py-1.5 rounded-lg text-sm bg-red-600 hover:bg-red-700 text-white">Delete</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

function PostEditor({ initial, onCancel, onSave }: {
  initial?: BlogPost;
  onCancel: () => void;
  onSave: (payload: Omit<BlogPost, "id" | "post_url"> & { id?: number; slug?: string }) => void;
}) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [author, setAuthor] = useState(initial?.author ?? "");
  const [date, setDate] = useState(initial?.date ?? new Date().toISOString().slice(0, 10));
  const [authorImageUrl, setAuthorImageUrl] = useState(initial?.authorImageUrl ?? "");
  const [slug, setSlug] = useState(() => {
    if (initial?.post_url) {
      const s = initial.post_url.split("/").filter(Boolean).pop() || "";
      return s;
    }
    return "";
  });
  const [body, setBody] = useState(initial?.articleBody ?? "");
  const [mode, setMode] = useState<EditorMode>("raw");

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const applyInsertion = (before: string, after = "", placeholder = "") => {
    const el = textAreaRef.current;
    if (!el) return;
    const start = el.selectionStart ?? 0;
    const end = el.selectionEnd ?? 0;
    const selected = body.slice(start, end) || placeholder;
    const newText = body.slice(0, start) + before + selected + after + body.slice(end);
    setBody(newText);
    // restore focus and selection
    requestAnimationFrame(() => {
      el.focus();
      const caretPos = start + before.length + selected.length;
      el.setSelectionRange(caretPos, caretPos);
    });
  };

  const addHeading = (level: 1 | 2 | 3) => {
    const hashes = "#".repeat(level) + " ";
    applyInsertion("\n" + hashes, "");
  };

  const addBold = () => applyInsertion("**", "**", "bold text");
  const addItalic = () => applyInsertion("*", "*", "italic text");
  const addCode = () => applyInsertion("```\n", "\n```", "code here");
  const addInlineCode = () => applyInsertion("`", "`", "inline code");
  const addQuote = () => applyInsertion("\n> ", "", "quote");
  const addList = () => applyInsertion("\n- ", "", "list item");

  const addLink = () => {
    const url = typeof window !== "undefined" ? window.prompt("Enter URL:", "https://") : null;
    if (!url) return;
    applyInsertion("[", `](${url})`, "link text");
  };

  const addImage = () => {
    const url = typeof window !== "undefined" ? window.prompt("Image URL (public URL or /image/..):", "https://") : null;
    if (!url) return;
    const alt = typeof window !== "undefined" ? window.prompt("Alt text:", "Image description") : "";
    const md = `![${alt || ""}](${url})`;
    applyInsertion("\n" + md + "\n");
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: initial?.id,
      title: title.trim(),
      description: description.trim(),
      author: author.trim(),
      date: date.trim(),
      authorImageUrl: authorImageUrl.trim() || "/image/author1.jpeg",
      slug: slug.trim() || slugify(title),
      articleBody: body,
    });
  };

  return (
    <form onSubmit={handleSave} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
          <input value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug (optional)</label>
          <input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="auto from title" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Author Image URL (optional)</label>
          <input value={authorImageUrl} onChange={(e) => setAuthorImageUrl(e.target.value)} placeholder="/image/author1.jpeg" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex flex-wrap gap-2">
            <ToolbarButton onClick={() => addHeading(1)}>H1</ToolbarButton>
            <ToolbarButton onClick={() => addHeading(2)}>H2</ToolbarButton>
            <ToolbarButton onClick={() => addHeading(3)}>H3</ToolbarButton>
            <div className="mx-2 w-px h-5 bg-gray-200" />
            <ToolbarButton onClick={addBold}>Bold</ToolbarButton>
            <ToolbarButton onClick={addItalic}>Italic</ToolbarButton>
            <ToolbarButton onClick={addInlineCode}>Code</ToolbarButton>
            <ToolbarButton onClick={addCode}>Code Block</ToolbarButton>
            <ToolbarButton onClick={addQuote}>Quote</ToolbarButton>
            <ToolbarButton onClick={addList}>List</ToolbarButton>
            <div className="mx-2 w-px h-5 bg-gray-200" />
            <ToolbarButton onClick={addLink}>Link</ToolbarButton>
            <ToolbarButton onClick={addImage}>Image</ToolbarButton>
          </div>
          <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1">
            <button type="button" onClick={() => setMode("raw")} className={`px-3 py-1.5 text-sm rounded-md ${mode === "raw" ? "bg-white shadow" : "text-gray-600"}`}>Raw</button>
            <button type="button" onClick={() => setMode("preview")} className={`px-3 py-1.5 text-sm rounded-md ${mode === "preview" ? "bg-white shadow" : "text-gray-600"}`}>Preview</button>
          </div>
        </div>

        {mode === "raw" ? (
          <textarea
            ref={textAreaRef}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder={`Write markdown here...\n\nExamples:\n# Heading 1\n## Heading 2\n**bold** *italic* \n[link](https://example.com)\n![alt](/image/hero.svg)`}
            rows={16}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 font-mono text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <div className="prose prose-blue max-w-none bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ReactMarkdown
              components={{
                h1: (props: any) => (
                  <h1 className="text-3xl md:text-4xl font-geist tracking-tighter mt-8 mb-4" {...props} />
                ),
                h2: (props: any) => (
                  <h2 className="text-2xl md:text-3xl font-geist tracking-tight mt-8 mb-3" {...props} />
                ),
                h3: (props: any) => (
                  <h3 className="text-xl md:text-2xl font-geist tracking-tight mt-6 mb-3" {...props} />
                ),
                p: (props: any) => <p className="font-inter leading-7 text-gray-800 my-4" {...props} />,
                ul: (props: any) => <ul className="list-disc pl-6 my-4 space-y-2" {...props} />,
                ol: (props: any) => <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />,
                li: (props: any) => <li className="font-inter text-gray-800" {...props} />,
                a: (props: any) => (
                  <a className="text-blue-600 hover:text-blue-700 underline" target="_blank" rel="noopener noreferrer" {...props} />
                ),
                img: (props: any) => (
                  <img className="rounded-lg my-6 mx-auto" loading="lazy" alt={(props as any).alt || ''} {...props} />
                ),
                code: ({ inline, className, children, ...rest }: any) => {
                  if (inline) {
                    return (
                      <code className={`bg-gray-100 px-1.5 py-0.5 rounded text-sm ${className || ''}`} {...rest}>
                        {children}
                      </code>
                    );
                  }
                  return (
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
                      <code className={className} {...rest}>{children}</code>
                    </pre>
                  );
                },
                blockquote: (props: any) => (
                  <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-700 my-6" {...props} />
                ),
                hr: () => <hr className="my-10 border-gray-200" />,
              }}
            >
              {body || "Nothing to preview yet."}
            </ReactMarkdown>
          </div>
        )}
      </div>

      <div className="flex items-center justify-end gap-3">
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900">Cancel</button>
        <button type="submit" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white">Save</button>
      </div>
    </form>
  );
}

function ToolbarButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm"
    >
      {children}
    </button>
  );
}
