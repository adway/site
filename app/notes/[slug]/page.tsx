import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SimpleMarkdown from '@/components/SimpleMarkdown';
import { getAllPosts, getPostBySlug } from '@/lib/notes';

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Adway Wadekar',
    };
  }

  return {
    title: `${post.title} | Adway Wadekar`,
    description: post.summary || 'Expository notes on statistics.',
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto mb-16 mt-12 max-w-3xl">
      <Link href="/notes" className="mb-8 inline-block text-sm no-underline text-[color:var(--muted)] hover:text-[color:var(--um-blue)]">
        ← Back to notes
      </Link>

      <header className="mb-8 border-b border-[color:var(--line)] pb-6">
        <h1 className="mb-2 text-[color:var(--um-blue)]">{post.title}</h1>
        <p className="mb-2 text-sm text-[color:var(--muted)]">{post.date || 'Undated'}</p>
        {post.tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={`${post.slug}-${tag}`}
                className="meta-chip rounded px-2 py-0.5 text-xs uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <SimpleMarkdown content={post.content} />
    </article>
  );
}
