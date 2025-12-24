import { ArrowDown, Code2, Zap, Target } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-12 sm:pt-20 pb-12 sm:pb-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 order-2 md:order-1">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Matthew <span className="text-green-600">Paoletta</span>
              </h1>
              <p className="text-xl sm:text-2xl text-green-600 font-semibold mt-3">
                Software Engineer & Problem Solver
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              I build software that solves real problems. From developing a <span className="font-semibold">Chrome extension helping students manage deadlines</span> to <span className="font-semibold">analyzing performance metrics to predict postseason success</span>, I combine technical depth with practical impact. UCSD Mathematics & Computer Science student passionate about creating elegant solutions to complex challenges.
            </p>

            {/* Key Skills/Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex gap-3 items-start">
                <Code2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Full-Stack Development</p>
                  <p className="text-sm text-gray-600">JavaScript, Python, Java</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Zap className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Problem Solving</p>
                  <p className="text-sm text-gray-600">Data analysis & optimization</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Target className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Impact Driven</p>
                  <p className="text-sm text-gray-600">Real-world solutions</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-medium text-center"
              >
                View My Work
              </a>
              <a
                href="https://github.com/Matthew-Paoletta"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-300 transition font-medium text-center"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/matthew-paoletta-b13738299/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-medium text-center"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex flex-col gap-2 text-sm text-gray-600 pt-4">
              <p>📧 matthew.paoletta73@gmail.com</p>
              <p>📍 San Diego, CA</p>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb779523732e04751a10e9de1b694bad3%2Ff1195e21dbc242de88ab0834e5ab3ee5?format=webp&width=800"
              alt="Matthew Vincent Paoletta"
              className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-12 animate-bounce">
        <ArrowDown className="w-6 h-6 text-green-600" />
      </div>
    </section>
  );
}
