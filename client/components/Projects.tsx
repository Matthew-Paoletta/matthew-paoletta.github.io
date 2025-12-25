import { Github, Code2, Database, BarChart3, Lightbulb } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Getting It Done",
      subtitle: "Academic Productivity Chrome Extension",
      date: "Personal Project",
      icon: Code2,
      color: "from-green-500 to-emerald-600",
      accentColor: "green",
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
      icon: BarChart3,
      color: "from-blue-600 to-blue-700",
      accentColor: "blue",
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
    {
      title: "Factors of Collaboration",
      subtitle: "Group Data Science Project & Collaboration Predictor",
      date: "Class Project - Winter 2025",
      icon: Lightbulb,
      color: "from-purple-500 to-purple-700",
      accentColor: "purple",
      description:
        "A data science project analyzing which factors most strongly predict music artist collaborations. Framed as a binary classification problem using artist popularity, background, and audio features.",
      highlights: [
        "Built a binary classification model to predict music artist collaborations based on multiple feature sets",
        "Analyzed artist popularity metrics, background information, and audio characteristics to identify key collaboration predictors",
        "Implemented feature engineering and selection techniques to optimize model performance",
        "Developed comprehensive visualizations and statistical analysis to communicate findings and insights from the data",
      ],
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Jupyter Notebook",
      ],
      github: "https://github.com/Matthew-Paoletta/Factors-of-Collaboration",
    },
  ];

  const getColorClasses = (accentColor) => {
    const colorMap = {
      green: {
        textLight: "text-green-100",
        textDark: "text-green-600",
        textDarker: "text-green-700",
        bgLight: "bg-green-50",
        border: "border-green-200",
        button: "bg-green-600 hover:bg-green-700",
      },
      blue: {
        textLight: "text-blue-100",
        textDark: "text-blue-600",
        textDarker: "text-blue-700",
        bgLight: "bg-blue-50",
        border: "border-blue-200",
        button: "bg-blue-600 hover:bg-blue-700",
      },
      purple: {
        textLight: "text-purple-100",
        textDark: "text-purple-600",
        textDarker: "text-purple-700",
        bgLight: "bg-purple-50",
        border: "border-purple-200",
        button: "bg-purple-600 hover:bg-purple-700",
      },
    };
    return colorMap[accentColor] || colorMap.green;
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white"
      data-section="projects"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Featured Projects
            </h2>
            <div className="w-12 h-1 bg-green-600 rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              const colors = getColorClasses(project.accentColor);
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition duration-300 flex flex-col"
                >
                  {/* Colored Header Section */}
                  <div
                    className={`bg-gradient-to-r ${project.color} p-8 sm:p-10 flex items-center justify-between relative overflow-hidden`}
                  >
                    <div className="flex-1 relative z-10">
                      <div className="flex items-baseline gap-3 mb-2">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white break-words">
                          {project.title}
                        </h3>
                      </div>
                      <p className={`${colors.textLight} font-medium text-sm`}>
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="relative z-10 ml-4">
                      <div className="w-14 h-14 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6 sm:p-8 flex flex-col gap-6">
                    {/* Project Info */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-semibold ${colors.textDark} uppercase tracking-wide`}>
                          {project.date}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2.5">
                      {project.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex gap-3">
                          <span className={`${colors.textDark} font-bold mt-0.5 flex-shrink-0 text-lg`}>
                            ✓
                          </span>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                      {project.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className={`${colors.bgLight} ${colors.textDarker} px-3 py-1.5 rounded-lg text-xs font-medium border ${colors.border} hover:shadow-md transition`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="pt-4 border-t border-gray-200">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2.5 ${colors.button} text-white font-medium rounded-lg transition transform hover:scale-105`}
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
