import fs from 'node:fs';
import path from 'node:path';

export type NoteMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  published: boolean;
};

export type Note = NoteMeta & {
  content: string;
};

const NOTES_DIR = path.join(process.cwd(), 'content', 'notes');

function parseTags(value: string): string[] {
  const trimmed = value.trim();

  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    return trimmed
      .slice(1, -1)
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  return trimmed
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function parseBoolean(value: string): boolean | null {
  const normalized = value.trim().toLowerCase();
  if (['true', 'yes', '1', 'on'].includes(normalized)) {
    return true;
  }
  if (['false', 'no', '0', 'off'].includes(normalized)) {
    return false;
  }
  return null;
}

function resolvePublished(data: Record<string, string>, tags: string[]): boolean {
  const normalizedTags = new Set(tags.map((tag) => tag.trim().toLowerCase()));

  const publishedField = data.published ? parseBoolean(data.published) : null;
  if (publishedField !== null) {
    return publishedField;
  }

  const status = data.status?.trim().toLowerCase();
  if (status === 'published') {
    return true;
  }
  if (status === 'draft' || status === 'unpublished' || status === 'private') {
    return false;
  }

  if (normalizedTags.has('draft') || normalizedTags.has('unpublished') || normalizedTags.has('private')) {
    return false;
  }

  if (normalizedTags.has('published') || normalizedTags.has('public')) {
    return true;
  }

  // Default behavior keeps existing notes visible unless explicitly unpublished.
  return true;
}

function parseFrontMatter(raw: string): { data: Record<string, string>; content: string } {
  const normalized = raw.replace(/\r\n/g, '\n');

  if (!normalized.startsWith('---\n')) {
    return { data: {}, content: normalized };
  }

  const end = normalized.indexOf('\n---\n', 4);
  if (end === -1) {
    return { data: {}, content: normalized };
  }

  const frontMatter = normalized.slice(4, end);
  const content = normalized.slice(end + 5).trim();

  const data: Record<string, string> = {};
  for (const line of frontMatter.split('\n')) {
    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    if (!key) {
      continue;
    }

    data[key] = value;
  }

  return { data, content };
}

function readPostFile(slug: string): string | null {
  const filePath = path.join(NOTES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, 'utf8');
}

export function getPostBySlug(slug: string, options?: { includeUnpublished?: boolean }): Note | null {
  const file = readPostFile(slug);
  if (!file) {
    return null;
  }

  const parsed = parseFrontMatter(file);
  const tags = parsed.data.tags ? parseTags(parsed.data.tags) : [];
  const published = resolvePublished(parsed.data, tags);

  if (!options?.includeUnpublished && !published) {
    return null;
  }

  return {
    slug,
    title: parsed.data.title ?? slug,
    date: parsed.data.date ?? '',
    summary: parsed.data.summary ?? '',
    tags,
    published,
    content: parsed.content,
  };
}

export function getAllPosts(options?: { includeUnpublished?: boolean }): NoteMeta[] {
  if (!fs.existsSync(NOTES_DIR)) {
    return [];
  }

  const posts = fs
    .readdirSync(NOTES_DIR)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
    .map((slug) => getPostBySlug(slug, options))
    .filter((post): post is Note => post !== null)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      summary: post.summary,
      tags: post.tags,
      published: post.published,
    }));

  posts.sort((a, b) => {
    const aDate = Number.isNaN(Date.parse(a.date)) ? 0 : Date.parse(a.date);
    const bDate = Number.isNaN(Date.parse(b.date)) ? 0 : Date.parse(b.date);
    return bDate - aDate;
  });

  return posts;
}

export function hasPublishedPosts(): boolean {
  return getAllPosts().length > 0;
}
