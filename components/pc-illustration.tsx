export default function PcIllustration() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {/* Gaming PC */}
      <div className="relative w-64 h-48 backdrop-blur-md bg-black/30 rounded-xl border border-blue-500/20 p-4 shadow-[0_0_20px_rgba(59,130,246,0.15)] group hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]">
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs px-2 py-1 rounded-md shadow-lg">
          Gaming
        </div>

        {/* PC Case */}
        <div className="relative h-28 w-20 mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-md border border-blue-500/30">
          {/* RGB Lighting */}
          <div className="absolute top-2 left-0 w-1 h-24 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-r-md opacity-70 animate-pulse"></div>

          {/* Front panel details */}
          <div className="absolute top-3 right-2 w-10 h-3 bg-black rounded-sm"></div>
          <div className="absolute top-8 right-2 w-10 h-3 bg-black rounded-sm"></div>
          <div className="absolute top-16 right-3 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_5px_rgba(59,130,246,0.7)] animate-pulse"></div>
          <div className="absolute top-20 right-3 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_5px_rgba(34,211,238,0.7)] animate-pulse delay-300"></div>
        </div>

        {/* PC Specs */}
        <div className="mt-4 text-xs text-center">
          <p className="text-blue-400">RTX 4090 • i9-13900K</p>
          <p className="text-gray-400">64GB RAM • 2TB NVMe</p>
        </div>
      </div>

      {/* Workstation PC */}
      <div className="relative w-64 h-48 backdrop-blur-md bg-black/30 rounded-xl border border-blue-500/20 p-4 shadow-[0_0_20px_rgba(59,130,246,0.15)] group hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]">
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs px-2 py-1 rounded-md shadow-lg">
          Workstation
        </div>

        {/* PC Case */}
        <div className="relative h-28 w-24 mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-md border border-blue-500/30">
          {/* RGB Lighting */}
          <div className="absolute top-0 left-3 right-3 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-b-md opacity-70 animate-pulse"></div>

          {/* Front panel details */}
          <div className="absolute top-4 left-2 right-2 h-8 bg-black/60 rounded-sm border border-gray-700/50"></div>
          <div className="absolute top-16 left-2 right-2 h-8 bg-black/60 rounded-sm border border-gray-700/50 flex items-center justify-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_5px_rgba(59,130,246,0.7)] animate-pulse"></div>
          </div>
        </div>

        {/* PC Specs */}
        <div className="mt-4 text-xs text-center">
          <p className="text-blue-400">RTX 4080 • Ryzen 9 7950X</p>
          <p className="text-gray-400">128GB RAM • 4TB NVMe</p>
        </div>
      </div>

      {/* Compact PC */}
      <div className="relative w-64 h-48 backdrop-blur-md bg-black/30 rounded-xl border border-blue-500/20 p-4 shadow-[0_0_20px_rgba(59,130,246,0.15)] group hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]">
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs px-2 py-1 rounded-md shadow-lg">
          Compact
        </div>

        {/* PC Case */}
        <div className="relative h-24 w-28 mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-md border border-blue-500/30">
          {/* RGB Lighting */}
          <div className="absolute bottom-0 left-3 right-3 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-t-md opacity-70 animate-pulse"></div>

          {/* Front panel details */}
          <div className="absolute top-3 left-3 w-22 h-16 bg-black/60 rounded-sm border border-gray-700/50 flex items-center justify-center">
            <div
              className="w-12 h-12 rounded-full border-2 border-gray-600 border-t-blue-500 border-r-blue-500 animate-spin"
              style={{ animationDuration: "3s" }}
            ></div>
          </div>
        </div>

        {/* PC Specs */}
        <div className="mt-4 text-xs text-center">
          <p className="text-blue-400">RTX 4060 • i5-13600K</p>
          <p className="text-gray-400">32GB RAM • 1TB NVMe</p>
        </div>
      </div>
    </div>
  )
}
