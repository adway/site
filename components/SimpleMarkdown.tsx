import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeRaw from 'rehype-raw';

type SimpleMarkdownProps = {
  content: string;
};

export default function SimpleMarkdown({ content }: SimpleMarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkBreaks, remarkMath]}
      rehypePlugins={[rehypeRaw, rehypeKatex]}
      components={{
        h1: ({ ...props }) => <h1 className="mb-4 mt-8 text-3xl font-bold tracking-tight text-zinc-900" {...props} />,
        h2: ({ ...props }) => (
          <h2 className="mb-3 mt-8 text-2xl font-semibold tracking-tight text-zinc-900 normal-case" {...props} />
        ),
        h3: ({ ...props }) => <h3 className="mb-2 mt-6 text-xl font-semibold text-zinc-900" {...props} />,
        p: ({ ...props }) => <p className="mb-5 leading-7 text-zinc-800" {...props} />,
        ul: ({ ...props }) => <ul className="my-4 list-disc pl-6 text-zinc-800" {...props} />,
        li: ({ ...props }) => <li className="mb-1" {...props} />,
        pre: ({ ...props }) => (
          <pre className="my-6 overflow-x-auto rounded border border-zinc-200 bg-zinc-50 p-4" {...props} />
        ),
        code: ({ className, children, ...props }) => {
          const isBlock = Boolean(className?.includes('language-'));

          if (isBlock) {
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }

          return (
            <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm" {...props}>
              {children}
            </code>
          );
        },
        a: ({ href, ...props }) => {
          const external = href?.startsWith('http');

          return (
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer noopener' : undefined}
              {...props}
            />
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
