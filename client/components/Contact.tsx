import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out!
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Email */}
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <Mail className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-semibold text-lg">Email</h3>
              <a
                href="mailto:matthew.paoletta73@gmail.com"
                className="text-gray-400 hover:text-green-400 transition"
              >
                matthew.paoletta73@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <Phone className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <a
                href="tel:+17605742440"
                className="text-gray-400 hover:text-green-400 transition"
              >
                (760) 574-2440
              </a>
            </div>

            {/* Location */}
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <MapPin className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="text-gray-400">San Diego, CA</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-gray-800 pt-8">
            <div className="space-y-4">
              <h3 className="text-center font-semibold text-lg">
                Connect with Me
              </h3>
              <div className="flex justify-center gap-8">
                <a
                  href="https://github.com/Matthew-Paoletta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition flex items-center gap-2"
                >
                  <Github className="w-6 h-6" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/matthew-paoletta-b13738299/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition flex items-center gap-2"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm space-y-2">
            <p>
              © {new Date().getFullYear()} Matthew Vincent Paoletta. All rights
              reserved.
            </p>
            <p>Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
