export default function Education() {
  const allCourses = [
    { name: "Linear Algebra", type: "major" },
    { name: "Java & C Programming", type: "major" },
    { name: "Machine Learning", type: "major" },
    { name: "Statistical Inference", type: "major" },
    { name: "System Programming", type: "major" },
    { name: "Software Tools", type: "major" },
    { name: "Computational Theory", type: "major" },
    { name: "Numerical Analysis", type: "major" },
    { name: "Data Modeling", type: "minor" },
    { name: "Python & Pandas", type: "minor" },
    { name: "Data Science in Practice", type: "minor" },
    { name: "Statistical Methods", type: "minor" },
    { name: "Data Structures and Algorithms", type: "minor" },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-white"
      data-section="education"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Education
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
          </div>

          {/* University Card */}
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 sm:p-10 border border-blue-200">
            <div className="space-y-8">
              {/* University Header */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  University of California, San Diego
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-700">
                  <span className="text-lg font-semibold">
                    📍 San Diego, CA
                  </span>
                  <span className="text-lg font-semibold">
                    🎓 Expected June 2026
                  </span>
                </div>
              </div>

              {/* Degrees Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-blue-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">①</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      B.S. Mathematical Computer Science
                    </h4>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-900 text-lg font-bold">②</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      Data Science Minor
                    </h4>
                  </div>
                </div>
              </div>

              {/* Important Coursework */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  Important Coursework
                </h4>
                <div className="space-y-4">
                  {/* Major Courses */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <p className="text-sm font-semibold text-gray-700">
                        Mathematical Computer Science Track
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-5">
                      {allCourses
                        .filter((course) => course.type === "major")
                        .map((course, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition"
                          >
                            {course.name}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Minor Courses */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <p className="text-sm font-semibold text-gray-700">
                        Data Science Minor Track
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-5">
                      {allCourses
                        .filter((course) => course.type === "minor")
                        .map((course, idx) => (
                          <span
                            key={idx}
                            className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-200 transition border border-yellow-300"
                          >
                            {course.name}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-blue-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">13</div>
                  <p className="text-sm text-gray-600 mt-1">Total Courses</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2026</div>
                  <p className="text-sm text-gray-600 mt-1">Target Graduation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
