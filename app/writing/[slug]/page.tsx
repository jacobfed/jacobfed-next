import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import { getAllPosts, getPost } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const post = getPost(slug);
    return { title: `${post.title} – Jacob Fedrigon` };
  } catch {
    return {};
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen pb-20">
      <div className="max-w-xl mx-auto px-6 pt-10">
        <Link
          href="/writing"
          className="text-xs text-gray-400 hover:underline"
        >
          ← writing
        </Link>

        <h1 className="text-4xl font-bold italic mt-6 mb-1">{post.title}</h1>
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-6">{post.date}</p>

        <Nav />

        <article className="mt-10 prose prose-sm dark:prose-invert max-w-none prose-a:underline prose-headings:font-bold prose-headings:italic">
          <MDXRemote source={post.content} />
        </article>
      </div>
    </main>
  );
}
