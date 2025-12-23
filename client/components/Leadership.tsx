export default function Leadership() {
  const leadership = [
    {
      title: "Vice President of Risk Management",
      organization: "Alpha Epsilon Pi Fraternity",
      location: "San Diego, CA",
      date: "Jan 2025 - Jan 2026",
      highlights: [
        "Led all risk management operations for philanthropic and social events, ensuring safety procedures were followed by all members and volunteers",
        "Directed and coordinated teams of members responsible for monitoring events, managing access, and enforcing risk policies",
        "Managed and allocated a $1,000 budget to purchase cleaning supplies and safety materials, ensuring fraternity houses were consistently maintained and event-ready",
        "Oversaw post-event cleanup operations to maintain facilities, uphold organizational standards, and preserve long-term housing and venue relationships",
      ],
    },
  ];

  return (
    <section
      id="leadership"
      className="py-16 sm:py-24 bg-gray-50"
      data-section="leadership"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Leadership Experience
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
          </div>

          {/* Leadership Timeline */}
          <div className="space-y-8">
            {leadership.map((role, index) => (
              <div
                key={index}
                className="border-l-4 border-blue-600 pl-6 sm:pl-8 py-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {role.title}
                  </h3>
                  <span className="text-sm text-gray-500 font-medium">
                    {role.date}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <p className="font-semibold text-blue-600">
                    {role.organization}
                  </p>
                  <p className="text-gray-600">{role.location}</p>
                </div>

                <div className="space-y-3">
                  {role.highlights.map((highlight, hIndex) => (
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
