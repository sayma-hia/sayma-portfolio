"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/data";
import type { BlogPostMeta } from "@/lib/blog";

const categories = ["All", "Engineering", "AI & LLMs", "Career", "Women in Tech", "Personal"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D2137] pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#12A585] text-sm font-medium uppercase tracking-wider mb-3">
            Writing
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">Blog</h1>
          <p className="text-[#7FA8C4] text-lg">
            Thoughts on software engineering, AI, and building products
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="bg-[#F7F9FB] py-12 px-4 sm:px-6 min-h-[60vh]">
        <div className="max-w-6xl mx-auto">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-[#12A585] text-white"
                    : "bg-white border border-[#E2E8F0] text-[#4A5568] hover:border-[#12A585] hover:text-[#12A585]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Post grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {filtered.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.07}>
                <BlogCard post={post as BlogPostMeta} />
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-[#7FA8C4] text-center py-16">No posts in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
