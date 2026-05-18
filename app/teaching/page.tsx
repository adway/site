type LinkItem = {
  label: string;
  href: string;
};

type TeachingTerm = {
  label: string;
};

type TeachingCourse = {
  course: string;
  role: string | null;
  instructor: string | null;
  evaluation?: LinkItem;
  terms: TeachingTerm[];
};

type TeachingInstitution = {
  institution: string;
  courses: TeachingCourse[];
};

export default function TeachingPage() {
  const teaching: TeachingInstitution[] = [
    {
      institution: "University of Michigan",
      courses: [
        {
          course: "STATS 250: Introduction to Statistics and Data Analysis",
          role: "Graduate Student Instructor",
          instructor: null,
          evaluation: { label: "Evaluation", href: "/docs/stats-250-evals.pdf" },
          terms: [
            { label: "Fall 2025" },
            { label: "Winter 2026" }
          ]
        }
      ]
    },
    {
      institution: "Duke University",
      courses: [
        {
          course: "STA 602: Bayesian Statistics (Master's Level)",
          role: "Teaching Assistant",
          instructor: "Prof. David Dunson",
          terms: [{ label: "Spring 2025" }]
        },
        {
          course: "STA 432: Mathematical Statistics",
          role: "Teaching Assistant",
          instructor: "Prof. Filippo Ascolani",
          terms: [{ label: "Fall 2024" }]
        },
        {
          course: "MATH 340: Adv. Intro. to Probability",
          role: "Grader",
          instructor: null,
          terms: [{ label: "Spring 2025" }]
        },
        {
          course: "MATH 230: Probability",
          role: "Grader",
          instructor: null,
          terms: [
            { label: "Fall 2022" },
            { label: "Fall 2024" }
          ]
        },
        {
          course: "MATH 112: Calculus II",
          role: "Grader and Help Room TA",
          instructor: null,
          terms: [
            { label: "Spring 2022" },
            { label: "Spring 2023" }
          ]
        },
        {
          course: "DECISION 618: Data Analytics for Business (Fuqua)",
          role: "Teaching Assistant",
          instructor: "Prof. Alexandre Belloni",
          terms: [
            { label: "Fall 2021" },
            { label: "Fall 2022" },
            { label: "Fall 2023" }
          ]
        }
      ]
    }
  ];

  return (
    <div className="mt-8 max-w-3xl mx-auto mb-12">
      <h1 className="mb-6">Teaching</h1>

      <div>
        {teaching.map((group, i) => (
          <div key={i} className={i === 0 ? "mb-0" : "mt-12 mb-0"}>
            <h2 className="mt-0 mb-6 border-b border-[color:var(--line)] pb-3">
              {group.institution}
            </h2>

            <ul className="space-y-4">
              {group.courses.map((item, j) => (
                <li key={j} className="flex flex-col border-l border-[color:var(--paper-edge)] pl-4 text-base leading-snug text-[color:var(--ink)]">
                  <div className="mb-0.5">
                    <span className="font-medium text-[color:var(--ink)]">{item.course}</span>
                    {item.evaluation && (
                      <a
                        href={item.evaluation.href}
                        className="ml-2 text-sm no-underline text-[color:var(--muted)] transition-colors hover:text-[color:var(--um-blue)]"
                      >
                        ({item.evaluation.label})
                      </a>
                    )}
                  </div>

                  {(item.role || item.instructor) && (
                    <div className="text-[color:var(--muted)]">
                      {item.role && <span className="italic">{item.role}</span>}
                      {item.role && item.instructor && <span className="mx-1.5">/</span>}
                      {item.instructor && <span>Instructor: {item.instructor}</span>}
                    </div>
                  )}

                  <div className="mt-1 text-sm text-[color:var(--muted)]">
                    {item.terms.map((term, k) => (
                      <span key={k}>
                        {k > 0 && <span className="mx-1.5 text-[color:var(--um-maize)]">•</span>}
                        <span>{term.label}</span>
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
