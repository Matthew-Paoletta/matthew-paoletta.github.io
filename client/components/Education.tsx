export default function Education() {
  const coursesByTrack = {
    major: {
      title: "Mathematical Computer Science",
      courses: [
        "Linear Algebra",
        "Data Structures",
        "Java & C Programming",
        "Machine Learning",
        "Statistical Methods",
        "Statistical Inference",
      ],
    },
    minor: {
      title: "Data Science Minor",
      courses: ["Data Modeling", "Python & Pandas", "Data Science in Practice"],
    },
  };

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

              {/* Curriculum Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Major */}
                <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-600">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-bold text-blue-600 mb-1">
                        B.S. {coursesByTrack.major.title}
                      </h4>
                      <p className="text-sm text-gray-600">Primary Focus</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-3">
                        Core Coursework
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {coursesByTrack.major.courses.map((course, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-blue-200 transition"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Minor */}
                <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-bold text-yellow-600 mb-1">
                        {coursesByTrack.minor.title}
                      </h4>
                      <p className="text-sm text-gray-600">Specialization</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-3">
                        Focus Areas
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {coursesByTrack.minor.courses.map((course, idx) => (
                          <span
                            key={idx}
                            className="bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-yellow-200 transition"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-blue-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">6</div>
                  <p className="text-sm text-gray-600 mt-1">Major Courses</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">3</div>
                  <p className="text-sm text-gray-600 mt-1">Minor Courses</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2026</div>
                  <p className="text-sm text-gray-600 mt-1">Target Grad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
