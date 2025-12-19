export default function ResearchPage() {
  const publications = [
    {
      year: "In Preparation",
      items: [
        {
          title: "A sensitivity analysis framework for quantifying confidence in decisions in the presence of data uncertainty",
          authors: "Wadekar, A.S. and Reiter, J.P.",
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
          authors: "Wadekar, A.S. and Reiter, J.P.",
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
          authors: "Wadekar, A.S.",
          venue: "IEEE/ACM ASONAM",
          links: [{ label: "doi", url: "https://doi.org/10.1109/ASONAM49781.2020.9381378" }]
        },
        {
          title: "Understanding opioid use disorder using tree-based classifiers",
          authors: "Wadekar, A.S.",
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
    <div className="mt-12 max-w-3xl mx-auto mb-12">
      {/* Matches Home Page H1: text-xl, zinc-900 */}
      <h1 className="text-zinc-900 text-bold mb-4">
        Research
      </h1>

      {/* PAPERS SECTION */}
      <div className="space-y-8">
        <h2 className="text-lg font-medium text-zinc-800 border-b border-zinc-200 pb-2 mb-6">
          Peer-Reviewed Publications
        </h2>
        {publications.map((group, i) => (
          <div key={i} className="mb-0">
            
            {/* Year Header: text-base, italic (same size as body text, but styled) */}
            <h3 className="text-sm font-bold font-mono uppercase text-zinc-800 mb-2">
              {group.year}
            </h3>

            <ul className="space-y-4"> 
              {group.items.map((paper, j) => (
                <li key={j} className="flex flex-col text-base leading-snug text-zinc-800">
                  
                  {/* Title */}
                  <div className="mb-0.5">
                    <span className="text-zinc-800 font-medium">{paper.title}</span>.
                  </div>

                  {/* Authors & Venue */}
                  <div className="text-zinc-600">
                    {paper.authors}
                    {paper.venue && (
                      <>
                        <span className="mx-1.5">/</span>
                        <span className="italic">{paper.venue}</span>
                      </>
                    )}
                  </div>

                  {/* Links: Matches Home page link style */}
                  <div className="mt-1 text-sm">
                    {paper.links.map((link, k) => (
                      <a 
                        key={k} 
                        href={link.url} 
                        className="mr-3 text-zinc-600 hover:text-blue-800 transition-colors no-underline decoration-zinc-400 hover:decoration-blue-800 decoration-1"
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

    {/* EXPOSITORY SECTION */}
    <div className="mt-12 max-w-3xl mx-auto mb-0">
      <h2 className="text-lg font-medium text-zinc-900 border-b border-zinc-200 pb-2 mb-6">
        Expository Writing
      </h2>
      
      <ul className="space-y-2 list-disc list-inside text-zinc-800">
        {expository.map((item, i) => (
          <li key={i}>
            <a 
              href={item.link} 
              className="hover:text-blue-800 underline decoration-zinc-300 hover:decoration-blue-800 underline-offset-4 decoration-1 transition-all text-base"
            >
              {item.title}
            </a>
            {/* The comma and description */}
            <span className="text-zinc-600">, {item.description}</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}