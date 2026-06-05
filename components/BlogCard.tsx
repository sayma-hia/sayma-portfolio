import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categoryColors } from "@/lib/data";
import type { BlogPostMeta } from "@/lib/blog";

type Props = {
  post: BlogPostMeta;
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogCard({ post }: Props) {
  const colorClass = categoryColors[post.category] ?? "bg-gray-100 text-gray-700";

  return (
    <article className="bg-white border border-[#E2E8F0] rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass}`}>
          {post.category}
        </span>
        <span className="text-xs text-[#7FA8C4]">
          {formatDate(post.date)} · {post.readTime} read
        </span>
      </div>

      <div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-semibold text-[#1A1A2E] text-lg leading-snug hover:text-[#12A585] transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-[#4A5568] text-sm mt-2 leading-relaxed">{post.excerpt}</p>
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="flex items-center gap-1 text-[#12A585] hover:text-[#0D8A6F] text-sm font-medium mt-auto transition-colors"
      >
        Read more <ArrowRight size={14} />
      </Link>
    </article>
  );
}
