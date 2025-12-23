import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-12 sm:pt-20 pb-12 sm:pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Matthew <span className="text-green-600">Paoletta</span>
              </h1>
              <p className="text-xl text-gray-600 mt-4">
                Mathematical Computer Science Student
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              Passionate about solving complex problems through elegant software solutions. Combining mathematics, data science, and engineering to build tools that make a real-world impact. Currently leading software development for assistive robotic solutions at Tikkun Olam Makers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-medium text-center"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/Matthew-Paoletta"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-300 transition font-medium text-center"
              >
                GitHub
              </a>
            </div>

            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <p>📧 matthew.paoletta73@gmail.com</p>
              <p>📱 (760) 574-2440</p>
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
        <ArrowDown className="w-6 h-6 text-blue-600" />
      </div>
    </section>
  );
}
