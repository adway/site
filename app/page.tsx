import Image from "next/image";

function LinkIcon({ type }: { type: "email" | "cv" | "scholar" | "linkedin" }) {
  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
        <path d="M3.75 6.75h16.5v10.5H3.75z" />
        <path d="m4.5 7.5 7.5 6 7.5-6" />
      </svg>
    );
  }

  if (type === "cv") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
        <path d="M7.5 3.75h6l4.5 4.5v12H7.5z" />
        <path d="M13.5 3.75v4.5H18" />
        <path d="M9.75 12h6" />
        <path d="M9.75 15.75h6" />
      </svg>
    );
  }

  if (type === "scholar") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
        <path d="m12 4.5 8.25 4.5L12 13.5 3.75 9z" />
        <path d="M6.75 10.5v4.125c0 1.875 2.25 3.375 5.25 3.375s5.25-1.5 5.25-3.375V10.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M8.25 9.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" />
      <path d="M6.75 10.5v7.5" />
      <path d="M11.25 10.5v7.5" />
      <path d="M11.25 13.5c0-1.5 1.125-3 3-3s3 1.5 3 3v4.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="mx-auto mt-8 max-w-3xl text-[color:var(--ink)]">
      <div className="w-full">
        <section className="grid gap-8 md:grid-cols-[12rem_minmax(0,1fr)] md:items-start">
          <div className="w-full max-w-[12rem]">
            <div className="relative aspect-square overflow-hidden rounded-sm border border-[color:var(--line)]">
              <Image
                src="/adway.jpg"
                alt="Portrait of Adway Wadekar"
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-4 space-y-2 text-base leading-6 text-[color:var(--muted)]">
              <a
                href="mailto:awadekar@umich.edu"
                className="flex items-center gap-2 no-underline"
              >
                <LinkIcon type="email" />
                Email
              </a>
              <a
                href="/docs/CV.pdf"
                className="flex items-center gap-2 no-underline"
              >
                <LinkIcon type="cv" />
                CV
              </a>
              <a
                href="https://scholar.google.com/citations?user=GJeFNhkAAAAJ&hl=en&oi=ao"
                className="flex items-center gap-2 no-underline"
              >
                <LinkIcon type="scholar" />
                Scholar
              </a>
              <a
                href="https://linkedin.com/in/adway-wadekar"
                className="flex items-center gap-2 no-underline"
              >
                <LinkIcon type="linkedin" />
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[1.05rem] leading-7 text-[color:var(--ink)]">
              I am a second-year PhD student in the <a href="https://stat.lsa.umich.edu">Department of Statistics</a> at the <a href="https://umich.edu">University of Michigan</a>, advised by Prof. <a href="https://jake-soloff.github.io/">Jake Soloff</a>. I graduated from Duke University with a B.S. in mathematics and statistical science in May 2025. Starting in Fall 2026, I will be supported by the Department of Energy Computational Science Graduate Fellowship.
            </p>
            <p className="mb-5 text-[1.05rem] leading-7 text-[color:var(--ink)]">
              I am interested in developing robust statistical tools that are well-adapted to the <span className="font-semibold text-[color:var(--ink)]">philosophy and practice of modern data science</span>. Specific areas of interest include multiple testing and selective inference, causal discovery and methods for AI-powered inference. My applied interests lie in <span className="font-semibold text-[color:var(--ink)]">human and population genetics</span>.
            </p>
            <p className="mb-5 text-[1.05rem] leading-7 text-[color:var(--ink)]">
              At Duke, I was fortunate to be advised by Prof. <a href="https://stat.duke.edu/~jerry">Jerry Reiter</a> and Prof. <a href="https://math.duke.edu/~ezra">Ezra Miller</a>. I also worked with Prof. <a href="https://chiragjpgroup.org">Chirag Patel</a> at Harvard Medical School.
            </p>
            <p className="text-[1.05rem] leading-7 text-[color:var(--ink)]">
              Outside of research, I have a strong interest in journalism. I worked as a <a href="https://www.dukechronicle.com/staff/adway-s-wadekar">news reporter and editor</a> for <span className="italic">The Chronicle</span>, Duke&apos;s student-run newspaper, where I won an Associated College Press award for breaking news. I am an avid basketball fan and worked on the creative team for Duke Men&apos;s Basketball for four years.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
