

"use client";


export default function BackendSolutionsSection() {
  return (
    <div className="relative w-full min-h-60dvh ">
      <div className="sticky top-0 z-10 flex items-center justify-center h-[700px] bg-gray-50/80 backdrop-blur-2xl overflow-hidden">
        <h1 className="text-3xl md:text-6xl font-bold text-slate-800 text-center transition-all duration-300">
          Back-end
        </h1>
      </div>

      <div className="relative z-30 mt-20">
        <div className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-t-2xl p-8 md:p-12 lg:p-16 min-h-[500px] md:min-h-[700px] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-300 leading-tight">
                APIs & databases
              </h2>

              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                Robust backend systems and RESTful APIs that power your
                applications. We build scalable server architectures with modern
                databases.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded transition-colors">
                  API Documentation
                </button>
                <button className="border border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-emerald-900 px-4 py-2 rounded transition-colors">
                  Consult Now
                </button>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                  Django
                </span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                  Python
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-800 rounded-lg p-6 h-80 overflow-hidden border border-slate-600">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-4">
                    API Terminal
                  </span>
                </div>

                <div className="font-mono text-sm space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">GET</span>
                    <span className="hidden md:text-blue-400">/api/users</span>
                    <span className="hidden md:text-gray-500">200 OK</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">POST</span>
                    <span className="hidden md:text-blue-400">
                      /api/auth/login
                    </span>
                    <span className="hidden md:text-gray-500">201 Created</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400">PUT</span>
                    <span className="hidden md:text-blue-400">
                      /api/users/:id
                    </span>
                    <span className="hidden md:text-gray-500">200 OK</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-red-400">DELETE</span>
                    <span className="hidden md:text-blue-400">
                      /api/users/:id
                    </span>
                    <span className="hidden md:text-gray-500">
                      204 No Content
                    </span>
                  </div>

                  <div className=" p-3 bg-slate-900 rounded border border-zinc-600">
                    <div className="text-gray-400 text-xs mb-2">Response:</div>
                    <div className="text-xs space-y-1">
                      <div className="hidden text-gray-300">{"{"}</div>
                      <div className="ml-4 text-blue-400">
                        "status":{" "}
                        <span className="text-green-400">"success"</span>,
                      </div>
                      <div className="ml-4 text-blue-400">
                        "data": <span className="text-yellow-400">[...]</span>
                      </div>
                      <div className="text-gray-300">{"}"}</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-2 right-2">
                  <div className="w-8 h-8 text-emerald-400">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zM4 16v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:p-6 md:flex md:items-center md:justify-center  ">
            <p className="md:text-gray-300/60 md:text-center md:mt-16 md:px-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sed
              commodi tempore consectetur saepe officia asperiores.
              Consequunturerror a exercitationem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
