import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-12 text-zinc-900 max-w-3xl mx-auto mb-12">
      
      {/* PROFILE HEADER */}
      <div className="flex flex-col sm:flex-row gap-10 items-start mb-8 border-b border-zinc-200 pb-5">
        
        {/* PHOTO: Square, Sharp Corners, Slight Grayscale for gravitas */}
        <div className="flex-shrink-0">
         <div className="relative w-48 h-48 rounded-sm overflow-hidden border border-zinc-800">
            <Image 
              src="/adway.jpg" 
              alt="Profile" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              sizes="192px"
            />
        </div>
        </div>

        {/* BIO & LINKS */}
        <div className="flex-grow pt-1">
          <h1 className="text-2xl text-zinc-900 mb-3 tracking-tight">
            Adway Wadekar
          </h1>
          
          {/* Lighter weight text, more formal */}
          <p className="text-zinc-800 text-md leading-snug mb-3">
            Statistics PhD Student
            <br />
            <span className="italic">University of Michigan, Ann Arbor</span>
          </p>

          {/* Contact Links: Classic underlined style */}
          <div className="flex gap-2 text-base text-zinc-800">
            <a href="mailto:awadekar@umich.edu" className="hover:text-blue-800 underline decoration-zinc-400 underline-offset-4 decoration-1 transition-colors">
              Email
            </a>
            <span className="text-zinc-800">•</span>
            <a href="/docs/CV.pdf" className="hover:text-blue-800 underline decoration-zinc-400 underline-offset-4 decoration-1 transition-colors">
              CV
            </a>
            <span className="text-zinc-800">•</span>
            <a href="https://scholar.google.com/citations?user=GJeFNhkAAAAJ&hl=en&oi=ao" className="hover:text-blue-800 underline decoration-zinc-400 underline-offset-4 decoration-1 transition-colors">
              Google Scholar
            </a>
            <span className="text-zinc-800">•</span>
            <a href="https://linkedin.com/in/adway-wadekar" className="hover:text-blue-800 underline decoration-zinc-400 underline-offset-4 decoration-1 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <section>
        {/* Body Text: Serif, Regular weight (not medium), slightly larger (text-lg) for readability */}
        <p className="text-base text-zinc-800 mb-5 leading-snug text-justify">
          I am a first-year PhD student in the Department of Statistics at the University of Michigan. I graduated from Duke University with a B.S. in mathematics and statistical science in May 2025.
        </p>
        <p className="text-base text-zinc-800 mb-5 leading-snug text-justify">
          I am interested in developing general, robust, and assumption-light statistical methodology, often based on principles from Bayesian statistics and probabilistic machine learning. My work is motivated by data containing discrete, deep, and latent structure. These data arise naturally both in biomedicine (especially medical and population genetics) and in the social sciences (experimental design, causal inference, privacy, and survey methodology).   
        </p>
        <p className="text-base text-zinc-800 mb-5 leading-snug text-justify">
          At Duke, I was fortunate to be advised by Prof. Jerry Reiter and Prof. Ezra Miller. I also worked with Prof. Jichun Xie and with Prof. Chirag Patel at Harvard Medical School.
        </p>
        <p className="text-base text-zinc-800 leading-snug text-justify">
          Outside of research, I have a strong interest in journalism and worked as a news reporter and editor for <span className="italic">The Chronicle</span>, Duke's student-run newspaper. I am an avid basketball fan and worked on the creative team for Duke Men’s Basketball.
        </p>
      </section>

    </div>
  );
}