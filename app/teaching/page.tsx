import { linkSync } from "fs";

export default function TeachingPage() {
  const teaching = [
    {
      course: "STATS 250: Introduction to Statistics and Data Analysis",
      institution: "University of Michigan",
      role: "Graduate Student Instructor",
      instructor: null,
      terms: [
        { label: "Fall 2025", links: null},
        { label: "Spring 2026", links: null}
      ]
    },
    {
      course: "STA 602: Bayesian Statistics (Master's Level)",
      institution: "Duke University",
      role: "Teaching Assistant",
      instructor: 'Prof. David Dunson', // Example: No instructor listed
      terms: [
        { label: "Spring 2025", links: null}
      ]
    },
    {
      course: "STA 432: Mathematical Statistics",
      institution: "Duke University",
      role: "Teaching Assistant", // Example: No role listed
      instructor: "Prof. Filippo Ascolani",
      terms: [
        { label: "Fall 2024", links: []}
      ]
    },
    {
      course: "DECISION 618: Data Analytics for Business",
      institution: "Fuqua School of Business, Duke",
      role: "Teaching Assistant", // Example: Pure minimalist entry
      instructor: "Prof. Alexandre Belloni", 
      terms: [
       {label: "Fall 2021", links: null},
       {label: "Fall 2022", links: null},
       {label: "Fall 2023", links: null}
      ]
    },
    {
      course: "MATH 340: Adv. Intro. to Probability",
      institution: "Duke University",
      role: "Grader",
      terms: [
        {label: "Spring 2025", links: null}
      ]
    },
    {
      course: "MATH 230: Probability",
      institution: "Duke University",
      role: "Grader",
      terms: [
        {label: "Fall 2022", links: null},
        {label: "Fall 2024", links: null}
      ]
    },
    {
      course: "MATH 112: Calculus II",
      institution: "Duke University",
      role: "Grader and Help Room TA",
      terms: [
        {label: "Spring 2022", links: null},
        {label: "Spring 2023", links: null}
      ]
    },
  ];

  return (
    <div className="mt-12 max-w-3xl mx-auto mb-12">
      <h1 className="text-zinc-900 font-bold mb-4">
        Teaching
      </h1>

      <div className="flex flex-col gap-4">
        {teaching.map((item, i) => (
          <div key={i} className="flex flex-col">
            
            {/* 1. TITLE & INSTITUTION (Always Present) */}
            <div className="flex justify-between items-baseline">
              <span className="font-semibold text-zinc-900">
                {item.course}
              </span>
              <span className="text-xs font-mono text-zinc-800 uppercase shrink-0 ml-4">
                {item.institution}
              </span>
            </div>

            {/* 2. CONTEXT ROW (Conditionally Rendered) */}
            {(item.role || item.instructor) && (
              <div className="text-sm text-zinc-800 mb-1.5">
                {item.role && (
                  <span className="italic">{item.role}</span>
                )}
                
                {/* Only show separator if BOTH exist */}
                {item.role && item.instructor && (
                  <span className="text-zinc-800"> / </span>
                )}
                
                {item.instructor && (
                  <span>Instructor: {item.instructor}</span>
                )}
              </div>
            )}

            {/* 3. SEMESTERS (Inline Horizontal List) */}
            <div className="text-sm leading-relaxed">
              <span className="font-medium text-zinc-800 mr-2 text-xs uppercase tracking-wide">
                Semesters:
              </span>
              
              {item.terms.map((t, j) => (
                <span key={j} className="inline-block last:mr-0">
                  
                  {/* Bullet Separator (only after first item) */}
                  {j > 0 && <span className="text-zinc-500 mx-1">•</span>}
                  
                  {/* The Term Date */}
                  <span className=" text-zinc-800 text-xs">
                    {t.label}
                  </span>
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}