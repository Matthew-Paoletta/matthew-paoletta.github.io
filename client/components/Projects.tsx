import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Getting It Done",
      subtitle: "Academic Productivity Chrome Extension",
      date: "Personal Project",
      description:
        "A Chrome extension using JavaScript to help college students centralize their academic information and manage deadlines efficiently.",
      highlights: [
        "Developing a Chrome extension using JavaScript to help college students centralize their academic information",
        "Created a function that processes screenshots of course schedules and with the help of Google API generates .ics calendar files for external calendar applications",
        "Parsed uploaded syllabi using OCR techniques to identify assignments, exams, and deadlines automatically",
        "Designed a dashboard-style interface to display upcoming tasks and reminders in an organized format that assisted students in managing their work at school",
      ],
      technologies: ["JavaScript", "CSS", "HTML", "OCR", "Google API"],
      github: "https://github.com/Matthew-Paoletta",
    },
    {
      title: "Playoff Win Predictor",
      subtitle: "Data Analysis Project",
      date: "Personal Project",
      description:
        "Statistical analysis of baseball datasets to identify performance metrics that correlate with postseason success.",
      highlights: [
        "Collected, cleaned, and analyzed baseball datasets spanning multiple seasons while formatting these findings in a simple to read Jupyter Notebook",
        "Performed correlation analysis across more than 30 performance metrics to study postseason success factors",
        "Created visualizations to compare trends and clearly communicate statistical relationships and findings",
      ],
      technologies: [
        "Python",
        "Jupyter Notebooks",
        "Data Analysis",
        "Visualization",
      ],
      github: "https://github.com/Matthew-Paoletta",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 bg-white"
      data-section="projects"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Projects
            </h2>
            <div className="w-12 h-1 bg-green-600 rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Project Header */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-500 font-medium">
                        {project.date}
                      </span>
                    </div>
                    <p className="text-lg text-green-600 font-medium mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-700">{project.description}</p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex gap-3">
                        <span className="text-green-600 font-bold mt-1 flex-shrink-0">
                          •
                        </span>
                        <p className="text-gray-700">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                    {project.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition"
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
