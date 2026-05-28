import Link from "next/link";
import Nav from "@/components/Nav";
import { getAllPosts } from "@/lib/posts";

export const metadata = { title: "Writing – Jacob Fedrigon" };

export default function Writing() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen flex flex-col items-center pt-16 pb-16 px-4">
      <div className="w-full max-w-xl">
        <h1 className="text-4xl font-bold italic mb-6">Writing</h1>
        <Nav />
        <div className="mt-10 space-y-6">
          {posts.length === 0 && (
            <p className="text-sm text-gray-400 italic">No posts yet.</p>
          )}
          {posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/writing/${post.slug}`} className="group">
                <h2 className="font-semibold group-hover:underline">{post.title}</h2>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{post.date}</p>
                {post.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {post.description}
                  </p>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
