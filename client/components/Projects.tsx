import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Getting It Done",
      subtitle: "Academic Productivity Chrome Extension",
      date: "Aug 2025 - Present",
      description:
        "This Extension is intended to assist students currently in college with their classes and staying organization.",
      highlights: [
        "Developing a Chrome Extension to automate academic organization by parsing visual and textual data from student portals and syllabi",
        "Engineering an image processing pipeline to convert screenshots of class schedule into structured data, automating the generation of .ics calendar files for seamless import to Google/Apple/calendar applications",
        "Building a document processing module to parse uploaded syllabi using OCR and NLP techniques, with the goal of identifying and tracking deadlines for assignments, tests, and quizzes",
        "Designing a User Interface to display these upcoming tasks and generate personalized study reminder, centralizing academic planning into a single dashboard",
      ],
      technologies: [
        "Chrome Extension",
        "Image Processing",
        "OCR/NLP",
        "JavaScript",
      ],
      github: "https://github.com/Matthew-Paoletta",
    },
    {
      title: "Playoff Win Predictor",
      subtitle: "Baseball Statistics Analysis",
      date: "Mar 2025",
      description:
        "Gathered, Cleaned, and Analyzed baseball statistics to find the single metric that correlates to winning in the postseason.",
      highlights: [
        "Developed an algorithm analyzing 30+ statistics across 5 seasons (150+ teams' seasons) to identify postseason success drivers, using Python for web scraping, cleaning, and correlation analysis",
        "Visualized trends (heatmaps, scatter plots) and found RBI (runs batted in) had the strongest playoff correlation, though no single combination of metrics exceeded 40% predictive accuracy, highlighting the complexity of postseason performance",
        "Published findings on GitHub, emphasizing the need for multivariate models to improve future predictions",
      ],
      technologies: ["Python", "Data Analysis", "Web Scraping", "Visualization"],
      github: "https://github.com/Matthew-Paoletta",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Projects
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
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
                    <p className="text-lg text-blue-600 font-medium mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-700">{project.description}</p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex gap-3">
                        <span className="text-blue-600 font-bold mt-1 flex-shrink-0">
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
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"
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
