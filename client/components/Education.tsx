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
                B.S. Mathematical Computer Science | Minor: Data Science
              </p>
              <div className="space-y-2 text-gray-700">
                <p className="text-sm">
                  <span className="font-medium">Relevant Coursework:</span> Linear Algebra, Data Structures, Java & C Programming, Machine Learning, Statistical Methods, Statistical Inference, Data Modeling, Python & Pandas, Data Science in Practice
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
