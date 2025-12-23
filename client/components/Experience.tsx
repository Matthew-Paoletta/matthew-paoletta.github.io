export default function Experience() {
  const experiences = [
    {
      title: "Head of Software Engineering",
      company: "Tikkun Olam Makers (TOM)",
      location: "San Diego, CA",
      date: "April 2025 - Present",
      highlights: [
        "Led development of software for a nonprofit building assistive robotic solutions to improve daily independence for elderly and disabled individuals",
        "Translated real-world accessibility challenges into system requirements and implemented core functionality in Python to support reliable, user-centered solutions",
        "Collaborated with mechanical engineers and designers to integrate software with physical hardware, ensuring solutions were practical, safe, and aligned with community needs",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Experience
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-4 border-blue-600 pl-6 sm:pl-8 py-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-gray-500 font-medium">
                    {exp.date}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <p className="font-semibold text-blue-600">{exp.company}</p>
                  <p className="text-gray-600">{exp.location}</p>
                </div>

                <div className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex gap-3">
                      <span className="text-blue-600 font-bold mt-1 flex-shrink-0">
                        •
                      </span>
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
