import Link from 'next/link';
import { getAllPosts } from '@/lib/notes';

export default function NotesIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto mb-12 mt-12 max-w-3xl">
      <h1 className="mb-2 text-zinc-900">Notes</h1>
      <p className="mb-8 text-base text-zinc-700">
        Some expository notes and statistics, probability and machine learning.
      </p>

      <div className="space-y-7">
        {posts.length === 0 ? (
          <p className="text-base text-zinc-600">No notes yet.</p>
        ) : (
          posts.map((post) => (
            <article key={post.slug} className="border-b border-zinc-200 pb-6">
              <div className="mb-1 text-sm text-zinc-500">{post.date || 'Undated'}</div>
              <h2 className="mb-2 mt-0 text-xl font-semibold normal-case tracking-tight text-zinc-900">
                <Link href={`/notes/${post.slug}`} className="no-underline hover:text-blue-800">
                  {post.title}
                </Link>
              </h2>
              {post.summary ? <p className="mb-3 text-base text-zinc-700">{post.summary}</p> : null}
              {post.tags.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={`${post.slug}-${tag}`}
                      className="rounded border border-zinc-300 px-2 py-0.5 text-xs uppercase tracking-wide text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))
        )}
      </div>
    </div>
  );
}
