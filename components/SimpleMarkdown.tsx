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
        h1: ({ ...props }) => <h1 className="mb-4 mt-7 text-3xl font-semibold tracking-[-0.03em] text-[color:var(--ink)]" {...props} />,
        h2: ({ ...props }) => (
          <h2 className="mb-3 mt-7 text-[1.55rem] font-semibold normal-case tracking-[-0.02em] text-[color:var(--ink)]" {...props} />
        ),
        h3: ({ ...props }) => <h3 className="mb-2 mt-6 text-xl font-semibold text-[color:var(--ink)]" {...props} />,
        p: ({ ...props }) => <p className="mb-4 leading-7 text-[color:var(--ink)]" {...props} />,
        ul: ({ ...props }) => <ul className="my-4 list-disc pl-6 text-[color:var(--ink)]" {...props} />,
        li: ({ ...props }) => <li className="mb-1" {...props} />,
        pre: ({ ...props }) => (
          <pre className="my-6 overflow-x-auto rounded-sm border border-[color:var(--line)] bg-[#0f0f0f] p-4 text-[color:var(--ink)]" {...props} />
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
            <code className="rounded-sm bg-[#111111] px-1 py-0.5 text-sm text-[color:var(--ink)]" {...props}>
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
