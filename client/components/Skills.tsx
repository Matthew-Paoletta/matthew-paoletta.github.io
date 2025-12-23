export default function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["Java", "C", "Python", "MATLAB", "Javascript", "Assembly"],
    },
    {
      name: "Software Development",
      skills: ["Git/Github", "GDB", "Valgrind", "Vim", "VSCode"],
    },
    {
      name: "Data Analysis",
      skills: ["JupyterLab", "NumPy", "Pandas", "Baby Pandas", "SVR"],
    },
    {
      name: "Web Development",
      skills: ["HTML", "CSS", "React", "Tailwind CSS"],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Skills
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition"
                    >
                      {skill}
                    </span>
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
