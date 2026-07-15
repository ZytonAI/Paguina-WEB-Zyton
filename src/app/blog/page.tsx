import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCover from "@/components/PostCover";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre automatización con IA, seguimiento de leads y cómo aplicarlo en negocios en Colombia.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-1 flex-col font-sans">
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 py-24">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Ideas sobre automatización con IA y seguimiento de leads para
            negocios.
          </p>
          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <PostCover icon={post.icon} size="sm" />
                  <time dateTime={post.date} className="mt-4 block text-sm text-muted">
                    {new Date(post.date).toLocaleDateString("es-CO", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="mt-2 text-2xl font-medium tracking-tight group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted">
                    {post.description}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
