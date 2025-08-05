"use client";

export default function DigitalSolutionsSection() {
  return (
    <div className="relative w-full min-h-60dvh">
      <div className="sticky top-0 z-20 flex items-center justify-center h-[700px] bg-gray-50/80 backdrop-blur-2xl">
        <h1 className="text-3xl md:text-6xl font-bold text-slate-800 text-center transition-all duration-300">
          Front-end
        </h1>
      </div>

      <div className="relative z-30 mt-20 mb-40">
        <div className="bg-slate-900 rounded-t-2xl p-8 md:p-12 lg:p-16 min-h-[500px] md:min-h-[700px] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400 leading-tight">
                custom web applications
              </h2>

              <p className="text-gray-300/60 text-base md:text-lg leading-relaxed">
                We specialize in building scalable, modern web applications
                using cutting-edge technologies like React, Next.js, and Django.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
                  View Projects
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-4 py-2 rounded transition-colors">
                  Get Quote
                </button>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  Tailwind
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-600 rounded-lg p-4 h-80 flex flex-col justify-center relative overflow-hidden border border-slate-900">
                <div className="bg-slate-900 rounded-lg border border-zinc-600 mb-4 overflow-hidden shadow-2xl">
                  <div className="bg-slate-800 px-4 py-2 flex items-center space-x-2 border-b border-zinc-600">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-red-600 rounded-full"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-600 rounded-full"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-green-600 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-400 ml-4">app.tsx</div>
                  </div>

                  <div className="p-2 font-mono text-xs space-y-1">
                    <div className="text-purple-400">
                      import <span className="text-blue-400">React</span> from{" "}
                      <span className="text-green-400">'react'</span>
                    </div>
                    <div className="text-purple-400">
                      import{" "}
                      <span className="text-blue-400">{"{ useState }"}</span>{" "}
                      from <span className="text-green-400">'react'</span>
                    </div>
                    <div className="text-gray-500">
                      // Building amazing web apps
                    </div>
                    <div className="text-blue-400">
                      function <span className="text-yellow-400">App</span>(){" "}
                      {"{"}
                    </div>
                    <div className="md:ml-4 md:text-purple-400">
                      const [<span className="md:text-blue-400">data</span>,{" "}
                      <span className="md:text-blue-400">setData</span>] ={" "}
                      <span className="md:text-yellow-400">useState</span>()
                    </div>
                    <div className="ml-4 text-purple-400">
                      return <span className="text-red-400">{"<div>"}</span>
                    </div>
                    <div className="text-blue-400">{"}"}</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-zinc-600 overflow-hidden">
                  <div className="bg-gray-200 px-2 py-2 flex items-center space-x-2 border-b">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <div className="bg-white rounded px-2 md:px-3 py-1 text-xs text-gray-600 md:ml-2 flex-1">
                      https://app.com
                    </div>
                  </div>

                  <div className="p-4 bg-white">
                    <div className="space-y-2">
                      <div className="h-2 bg-blue-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 md:top-4 md:right-4 flex space-x-2">
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
                    R
                  </div>
                  <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white text-xs font-bold">
                    N
                  </div>
                  <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold">
                    JS
                  </div>
                </div>

                <div className="absolute bottom-5 right-5 text-xs text-blue-400 font-mono">
                  {"</>"}
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
