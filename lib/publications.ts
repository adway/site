export type Publication = {
  title: string
  authors: string[]
  journal: string
  year: number
  abstract?: string
  doi?: string
  url?: string
  arxiv?: string
}

export type Expository = {
  title: string
  year: number,
  venue?: string,
  pdf?: string
  arxiv?: string
  abstract?: string
}

// Replace these sample publications with your own
export const publications: Publication[] = [
  {
    title: "A sensitivity analysis approach to quantifying confidence in decisions in the presence of data uncertainty",
    authors: ["Adway S. Wadekar", "Jerome P. Reiter"],
    journal: "Working Paper",
    year: 2025,
  },
  {
    title: "Evaluating binary outcome classifiers estimated from survey data",
    authors: ["Adway S. Wadekar", "Jerome P. Reiter"],
    journal: "Epidemiology",
    year: 2024,
    abstract:
      "We present an approach complex survey design into assessing efficacy of binary outcome classifiers.",
    doi: "10.1097/EDE.0000000000001776",
  },
  {
    title: "A psychosocial approach to predicting substance use disorder (SUD) among adolescents",
    authors: ["Adway S. Wadekar"],
    journal: "IEEE/ACM ASONAM",
    year: 2020,
    doi: "10.1109/ASONAM49781.2020.9381378"
  },
  {
    title: "Understanding opioid use disorder using tree-based classifiers",
    authors: ["Adway S. Wadekar"],
    journal: "Drug and Alcohol Dependence",
    year: 2020,
    doi: "10.1016/j.drugalcdep.2020.107839"
  },
]

export const expository: Expository[] = [
  {
    title: "Algebraic and geometric aspects of log-linear models",
    authors: ["Adway S. Wadekar"],
    venue: "Senior thesis",
    year: 2025,
    pdf: "bayes_astat",
    abstract: "We provide the statistical intuition behind recent papers that study the algebraic and geometric properties of log-linear models"
  }
] 