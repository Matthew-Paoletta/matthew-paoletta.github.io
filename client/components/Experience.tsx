export default function Experience() {
  const experiences = [
    {
      title: "Operational Student Worker",
      company: "Undergraduate Office of Admissions",
      location: "La Jolla, CA",
      date: "May 2024 - Present",
      highlights: [
        "Processed and managed all incoming office mail and documents, ensuring accurate sorting, delivery, and digital archiving for a high-volume admissions office",
        "Maintained data integrity by meticulously scanning, indexing, and verifying document types and CEEB codes to enable error-free assignment to admissions officers",
        "Provided direct client support by proactively researching document inquiries and professionally triaging phone calls to resolve challenges for students, officers, and managers",
      ],
    },
    {
      title: "Vice President of Risk Management",
      company: "Alpha Epsilon Pi Fraternity",
      location: "La Jolla, CA",
      date: "January 2025 - Present",
      highlights: [
        "Responsible for safety and well-being of the members during fraternal philanthropic events",
        "Ensuring risk procedures are being followed for our charitable events along with gathering relevant materials",
        "Scheduling volunteers, working within a fixed schedule, and creating group chats for risk teams, establishing clear communication and coordination with the team",
        "Managing a budget to keep the space the chapter uses clean, to guarantee future partnerships with that locale",
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
