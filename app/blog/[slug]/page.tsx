import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LinkedInIcon from "@/components/LinkedInIcon";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { blogPosts, categoryColorsDark, siteConfig } from "@/lib/data";
import BlogCard from "@/components/BlogCard";
import type { BlogPostMeta } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} — Sayma Saymon Hia` };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  // Try MDX file first, fall back to placeholder
  const mdxPost = getPostBySlug(slug);
  const metaPost = blogPosts.find((p) => p.slug === slug);

  if (!metaPost) notFound();

  const post = mdxPost ?? { ...metaPost, content: "" };
  const colorClass = categoryColorsDark[post.category] ?? "bg-gray-500/20 text-gray-300";

  // Related posts: same category, excluding current
  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  return (
    <>
      {/* Mini hero */}
      <section className="bg-[#0D2137] pt-32 pb-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-4 ${colorClass}`}>
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-[#7FA8C4] text-sm">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime} read</span>
            <span>·</span>
            <span>{siteConfig.name}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[#7FA8C4] hover:text-[#12A585] text-sm mb-10 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          {post.content ? (
            <article className="prose prose-slate prose-lg max-w-none prose-headings:text-[#1A1A2E] prose-a:text-[#12A585] prose-a:no-underline hover:prose-a:underline prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded prose-pre:bg-[#0D2137]">
              <MDXRemote source={post.content} />
            </article>
          ) : (
            <div className="text-center py-20 text-[#7FA8C4]">
              <p className="text-lg">Full article coming soon.</p>
              <p className="text-sm mt-2">{post.excerpt}</p>
            </div>
          )}

          {/* Divider */}
          <hr className="border-[#12A585] border-2 rounded mt-14 mb-10" />

          {/* Author card */}
          <div className="flex items-start gap-4 p-6 bg-[#F7F9FB] rounded-xl border border-[#E2E8F0]">
            <div className="w-14 h-14 rounded-full bg-[#12A585] flex items-center justify-center text-white font-bold text-sm shrink-0">
              SSH
            </div>
            <div>
              <p className="font-semibold text-[#1A1A2E]">{siteConfig.name}</p>
              <p className="text-[#4A5568] text-sm">{siteConfig.role}</p>
              <p className="text-[#4A5568] text-sm mt-1">
                Building full-stack products and AI systems for 7+ years.
              </p>
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#12A585] hover:text-[#0D8A6F] text-sm mt-2 transition-colors"
              >
                <LinkedInIcon size={13} /> Connect on LinkedIn
              </Link>
            </div>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="font-semibold text-[#1A1A2E] text-lg mb-5">More posts</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {related.map((p) => (
                  <BlogCard key={p.slug} post={p as BlogPostMeta} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
