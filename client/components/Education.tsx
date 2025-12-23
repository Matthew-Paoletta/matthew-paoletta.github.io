export default function Education() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Education
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
          </div>

          {/* Education Items */}
          <div className="space-y-8">
            {/* UC San Diego */}
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-2xl font-semibold text-gray-900">
                  University of California, San Diego
                </h3>
                <span className="text-sm text-gray-500 font-medium">Expected Graduation: June 2026</span>
              </div>
              <p className="text-lg text-blue-600 font-medium mb-4">
                Bachelors of Science in Mathematical Computer Science
              </p>
              <div className="space-y-2 text-gray-700">
                <p className="font-medium">Data Science Minor</p>
                <p className="text-sm">
                  <span className="font-medium">Relevant Courses:</span> Multivariable Calculus, Differential Equations, Linear Algebra, Mathematical Reasoning, Modern Algebra, Data Structures, Programming in Java, MATLAB, and C
                </p>
                <p className="text-sm">
                  <span className="font-medium">Data Science Courses:</span> Statistical Methods, Programming in Python and Pandas, Data Science in Practice using Jupyter
                </p>
              </div>
            </div>

            {/* High School */}
            <div className="border-l-4 border-gray-300 pl-6 py-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Shadow Hills High School
                </h3>
                <span className="text-sm text-gray-500 font-medium">September 2018 - June 2022</span>
              </div>
              <p className="text-lg text-blue-600 font-medium mb-4">
                Valedictorian
              </p>
              <div className="space-y-2 text-gray-700">
                <p className="text-sm">
                  Graduating class of 504 with a 4.75 GPA
                </p>
                <p className="text-sm">
                  Took multiple honors and AP courses, including Dual Enrollment at College of the Desert
                </p>
                <p className="text-sm">
                  Accrued 54 college credits prior to entering UC San Diego, becoming a sophomore in first year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
