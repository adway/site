export default function ResearchPage() {
  const publications = [
    {
      year: "Preprints",
      items: [
         {
          title: "Calibration without labels in multiple testing",
          authors: "A.S. Wadekar and J.A. Soloff",
          venue: "Under review at NeurIPS",
          links: [{ label: "arXiv", url: "https://arxiv.org/abs/2606.19737" }]
        },
        {
          title: "A sensitivity analysis framework for quantifying confidence in decisions in the presence of data uncertainty",
          authors: "A.S. Wadekar and J.P. Reiter",
          venue: "Major revision at Statistics and Public Policy",
          links: [{ label: "arXiv", url: "https://arxiv.org/abs/2504.17043" }]
        }
      ]
    },
    {
      year: "2024",
      items: [
        {
          title: "Evaluating binary outcome classifiers estimated from survey data",
          authors: "A.S. Wadekar and J.P. Reiter",
          venue: "Epidemiology",
          links: [{ label: "arXiv", url: "https://arxiv.org/abs/2311.00596" }, { label: "doi", url: "https://doi.org/10.1097/EDE.0000000000001776" }]
        }
      ]
    },
    {
      year: "2020",
      items: [
        {
          title: "A psychosocial approach to predicting substance use disorder (SUD) among adolescents",
          authors: "A.S. Wadekar",
          venue: "IEEE/ACM ASONAM",
          links: [{ label: "doi", url: "https://doi.org/10.1109/ASONAM49781.2020.9381378" }]
        },
        {
          title: "Understanding opioid use disorder using tree-based classifiers",
          authors: "A.S. Wadekar",
          venue: "Drug and Alcohol Dependence",
          links: [{ label: "doi", url: "https://doi.org/10.1016/j.drugalcdep.2020.107839" }]
        }
      ]
    }
  ];

  const expository = [
    { 
      title: "Algebraic and geometric aspects of log-linear models", 
      description: "Undergraduate Thesis",
      link: "/docs/astat.pdf" 
    },
    // Future example:
    // { title: "Matrix Calculus Cheat Sheet", description: "Tutorial", link: "#" }
  ];

  return (
    <div className="mt-8 max-w-3xl mx-auto mb-12">
      <h1 className="mb-6">
        Research
      </h1>

      <div className="space-y-8">
        <h2 className="mb-6 border-b border-[color:var(--line)] pb-3">
          Peer-Reviewed Publications
        </h2>
        {publications.map((group, i) => (
          <div key={i} className="mb-0">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
              {group.year}
            </h3>

            <ul className="space-y-4"> 
              {group.items.map((paper, j) => (
                <li key={j} className="flex flex-col border-l border-[color:var(--paper-edge)] pl-4 text-base leading-snug text-[color:var(--ink)]">
                  <div className="mb-0.5">
                    <span className="font-medium text-[color:var(--ink)]">{paper.title}</span>
                  </div>

                  <div className="text-[color:var(--muted)]">
                    {paper.authors}
                    {paper.venue && (
                      <>
                        <span className="mx-1.5">/</span>
                        <span className="italic">{paper.venue}</span>
                      </>
                    )}
                  </div>

                  <div className="mt-1 text-sm">
                    {paper.links.map((link, k) => (
                      <a 
                        key={k} 
                        href={link.url} 
                        className="mr-3 no-underline text-[color:var(--muted)] transition-colors hover:text-[color:var(--um-blue)]"
                      >
                        [{link.label}]
                      </a>
                    ))}
                  </div>

                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    <div className="mt-12 max-w-3xl mx-auto mb-0">
      <h2 className="mb-6 border-b border-[color:var(--line)] pb-3">
        Expository Writing
      </h2>
      
      <ul className="space-y-3 list-disc list-inside text-[color:var(--ink)]">
        {expository.map((item, i) => (
          <li key={i}>
            <a 
              href={item.link} 
              className="text-base transition-all"
            >
              {item.title}
            </a>
            <span className="text-[color:var(--muted)]">, {item.description}</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
