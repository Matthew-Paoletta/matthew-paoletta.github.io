import { Award } from "lucide-react";

export default function Awards() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Awards & Achievements
            </h2>
            <div className="w-12 h-1 bg-green-600 rounded-full"></div>
          </div>

          {/* Award Card */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 sm:p-10 border border-green-200">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Valedictorian
                  </h3>
                  <p className="text-green-600 font-semibold text-lg">
                    Shadow Hills High School, Indio, CA
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    September 2018 - June 2022
                  </p>
                </div>

                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-semibold mb-1">
                      Graduating Class of 504 with 4.75 GPA
                    </p>
                    <p>
                      Worked diligently to maintain the highest GPA while taking
                      a multitude of higher-level courses including Dual
                      Enrollment classes at College of the Desert and 9 Advanced
                      Placement Tests.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">
                      Advanced Academic Achievement
                    </p>
                    <p>
                      Accrued a total of 54 college credits prior to entering UC
                      San Diego, becoming a sophomore in the first year of
                      college.
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-blue-200">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                      4.75
                    </div>
                    <p className="text-sm text-gray-600">GPA</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                      504
                    </div>
                    <p className="text-sm text-gray-600">Class Size</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                      54
                    </div>
                    <p className="text-sm text-gray-600">College Credits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
