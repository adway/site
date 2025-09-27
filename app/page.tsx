"use client"

import { ArrowUpRight, Twitter, Linkedin, Mail, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { publications, expository } from "@/lib/publications"
import ThemeToggle from "@/components/ThemeToggle"

export default function Home() {
  const [expandedPublication, setExpandedPublication] = useState<number | null>(null)

  const togglePublication = (index: number) => {
    if (expandedPublication === index) {
      setExpandedPublication(null)
    } else {
      setExpandedPublication(index)
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <header className="mb-8 flex flex-col sm:flex-row items-start gap-4">
        <div className="relative h-32 w-32 overflow-hidden rounded-full flex-shrink-0 border-2 border-primary">
          <Image src="/adway.jpg" alt="Profile" fill className="object-cover" priority />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-primary">Adway Wadekar</h1>
          <p className="text-sm text-muted-foreground">Graduate student at the University of Michigan</p>
          <nav className="flex mt-4 space-x-4 text-sm">
            <ThemeToggle/>
            <Link href="#about" className="text-muted-foreground hover:text-primary">
              About
            </Link>
            <Link href="/docs/CV.pdf" className="text-muted-foreground hover:text-primary">
              CV
            </Link>
            <Link href="#publications" className="text-muted-foreground hover:text-primary">
              Research
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section id="about" className="mb-8">
          <p>
          I'm a first-year PhD student in the Department of Statistics at the University of Michigan. I graduated from Duke University with a B.S. in mathematics and statistical science in May 2025.
          </p>
          <p>
          I am interested in developing general, robust and assumption-light statistical methodology, often on principles from Bayesian statistics/machine learning. I find the most interesting inspiration for such methods in biomedicine (especially medical and population genetics) and the social sciences (experimental design, causal inference, privacy and survey methodology).
          </p>
          <p>
          At Duke, I was fortunate to be advised by Prof. Jerry Reiter and Prof. Ezra Miller. I also worked with Prof. Jichun Xie and Prof. Chirag Patel at Harvard Medical School.
          </p>
          <p>
          Outside of research, I have a strong interest in journalism and worked as a news reporter and editor for The Chronicle, Duke's student-run newspaper. I am an avid basketball fan and worked on the creative team for Duke Men’s Basketball.
          </p>
        </section>

        <section id="publications" className="mb-8">
          <h1 className="text-xl font-bold mb-2 text-primary">Research</h1>
          <h2 className="text-l font-bold mb-4 text-primary">Publications</h2>
          <div className="space-y-4 mb-6">
            {publications.map((publication, index) => (
              <div key={index} className="border-b pb-4 border-primary/20">
                <div>
                  <h3 className="font-medium">{publication.title}</h3>
                  <p className="text-sm text-muted-foreground">{publication.authors.join(", ")}</p>
                  <p className="text-xs text-muted-foreground">
                    {publication.journal}, {publication.year}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    {publication.doi && (
                      <Link
                        href={`https://doi.org/${publication.doi}`}
                        className="text-xs text-primary inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Publication <ArrowUpRight className="ml-1 h-3 w-3" />
                      </Link>
                    )}
                    {publication.arxiv && (
                      <Link
                        href={`https://arxiv.org/abs/${publication.arxiv}`}
                        className="text-xs text-primary inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Preprint <ArrowUpRight className="ml-1 h-3 w-3" />
                      </Link>
                    )}
                    {publication.abstract && (
                      <button
                        onClick={() => togglePublication(index)}
                        className="text-xs text-muted-foreground hover:text-primary inline-flex items-center"
                      >
                        {expandedPublication === index ? (
                          <>
                            Hide Description <ChevronUp className="ml-1 h-3 w-3" />
                          </>
                        ) : (
                          <>
                            Show Description <ChevronDown className="ml-1 h-3 w-3" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
                {expandedPublication === index && publication.abstract && (
                  <div className="mt-2 text-sm">
                    <p>{publication.abstract}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <h2 className="text-l font-bold mb-4 text-primary">Expository Writing</h2>
          <div className="space-y-4 mb-6">
          {expository.map((writing, index) => (
              <div key={index} className="border-b pb-4 border-primary/20">
                <div>
                  <h3 className="font-medium">{writing.title}</h3>
                  <p className="text-sm text-muted-foreground">{writing.authors.join(", ")}</p>
                  <p className="text-xs text-muted-foreground">
                    {writing.venue && (`${writing.venue}, `)} {writing.year}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    {writing.pdf && (
                      <Link
                        href={`/docs/${writing.pdf}.pdf`}
                        className="text-xs text-primary inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Document <ArrowUpRight className="ml-1 h-3 w-3" />
                      </Link>
                    )}
                    {writing.abstract && (
                      <button
                        onClick={() => togglePublication(index)}
                        className="text-xs text-muted-foreground hover:text-primary inline-flex items-center"
                      >
                        {expandedPublication === index ? (
                          <>
                            Hide Description <ChevronUp className="ml-1 h-3 w-3" />
                          </>
                        ) : (
                          <>
                            Show Description <ChevronDown className="ml-1 h-3 w-3" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
                {expandedPublication === index && writing.abstract && (
                  <div className="mt-2 text-sm">
                    <p>{writing.abstract}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-4">
          <h2 className="text-xl font-bold mb-4 text-primary">Contact</h2>
          <div className="flex space-x-4 text-sm">
            <Link
              href="mailto:awadekar@umich.edu"
              className="flex items-center text-muted-foreground hover:text-primary"
            >
              <Mail className="h-4 w-4 mr-1" /> awadekar@umich.edu
            </Link>
            <Link
              href="https://linkedin.com/in/adway-wadekar"
              className="flex items-center text-muted-foreground hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4 mr-1" /> LinkedIn
            </Link>
            <Link
              href="https://x.com/AdwayWadekar"
              className="flex items-center text-muted-foreground hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-4 w-4 mr-1" /> Twitter
            </Link>
          </div>
        </section>
      </main>

      <footer className="text-xs text-muted-foreground mt-4 pt-4 border-t border-primary/20">
        © {new Date().getFullYear()} Adway Wadekar
      </footer>
    </div>
  )
}
