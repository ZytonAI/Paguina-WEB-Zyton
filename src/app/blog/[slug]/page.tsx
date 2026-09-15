import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCover from "@/components/PostCover";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

const siteUrl = "https://www.zytonai.com";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${siteUrl}/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "ZytonAI",
    },
    publisher: {
      "@type": "Organization",
      name: "ZytonAI",
      logo: `${siteUrl}/logo.png`,
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <div className="flex flex-1 flex-col font-sans">
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-24">
          <Link href="/blog" className="text-sm text-muted hover:text-foreground">
            ← Blog
          </Link>
          <time dateTime={post.date} className="mt-6 block text-sm text-muted">
            {new Date(post.date).toLocaleDateString("es-CO", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-8">
            <PostCover icon={post.icon} size="lg" />
          </div>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted">
            {post.content.map((block, i) => {
              switch (block.type) {
                case "h2":
                  return (
                    <h2
                      key={i}
                      className="!mt-12 text-2xl font-semibold tracking-tight text-foreground"
                    >
                      {block.text}
                    </h2>
                  );
                case "list":
                  return (
                    <ul key={i} className="list-disc space-y-2 pl-6">
                      {block.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  );
                case "quote":
                  return (
                    <blockquote
                      key={i}
                      className="border-l-2 border-accent py-1 pl-6 text-xl font-medium italic text-foreground"
                    >
                      {block.text}
                    </blockquote>
                  );
                default:
                  return <p key={i}>{block.text}</p>;
              }
            })}
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <Link
              href="/contacto"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              Agenda una llamada
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </div>
  );
}
