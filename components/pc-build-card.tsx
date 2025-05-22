"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { cn } from "@/lib/utils"

type PcPart = "CPU" | "GPU" | "RAM" | "Motherboard"

type PcBuild = {
  id: number
  name: string
  budget: number
  parts: Record<PcPart, string>
}

type PcBuildCardProps = {
  build: PcBuild
  onDownload: () => void
}

export default function PcBuildCard({ build, onDownload }: PcBuildCardProps) {
  const [hoveredPart, setHoveredPart] = useState<PcPart | null>(null)

  return (
    <div className="relative group">
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-70 blur transition duration-500"></div>

      <div className="relative backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02]">
        {/* PC Build Card Header */}
        <div className="bg-gradient-to-r from-blue-900/60 to-black/60 p-4 border-b border-white/10">
          <h3 className="text-xl font-bold text-white">{build.name}</h3>
        </div>

        {/* 3D PC Case Visualization */}
        <div className="relative h-48 bg-gradient-to-b from-black/60 to-blue-900/30 flex items-center justify-center">
          {/* Stylized PC case */}
          <div className="relative w-32 h-40 border-2 border-blue-500/30 rounded-lg bg-black/50 flex flex-col">
            {/* PC Parts that can be hovered */}
            <div
              className={cn(
                "absolute top-4 left-4 right-4 h-8 border border-white/20 rounded bg-blue-900/30 transition-all duration-300",
                hoveredPart === "CPU" && "bg-blue-600/50 border-blue-400",
              )}
              onMouseEnter={() => setHoveredPart("CPU")}
              onMouseLeave={() => setHoveredPart(null)}
            ></div>

            <div
              className={cn(
                "absolute top-16 left-4 right-4 h-12 border border-white/20 rounded bg-blue-900/30 transition-all duration-300",
                hoveredPart === "GPU" && "bg-blue-600/50 border-blue-400",
              )}
              onMouseEnter={() => setHoveredPart("GPU")}
              onMouseLeave={() => setHoveredPart(null)}
            ></div>

            <div
              className={cn(
                "absolute bottom-12 left-4 right-4 h-6 border border-white/20 rounded bg-blue-900/30 transition-all duration-300",
                hoveredPart === "RAM" && "bg-blue-600/50 border-blue-400",
              )}
              onMouseEnter={() => setHoveredPart("RAM")}
              onMouseLeave={() => setHoveredPart(null)}
            ></div>

            <div
              className={cn(
                "absolute bottom-4 left-4 right-4 h-6 border border-white/20 rounded bg-blue-900/30 transition-all duration-300",
                hoveredPart === "Motherboard" && "bg-blue-600/50 border-blue-400",
              )}
              onMouseEnter={() => setHoveredPart("Motherboard")}
              onMouseLeave={() => setHoveredPart(null)}
            ></div>

            {/* Glowing lights */}
            <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-500 rounded-full shadow-[0_0_5px_2px_rgba(34,211,238,0.7)]"></div>
            <div className="absolute top-2 right-4 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_5px_2px_rgba(59,130,246,0.7)]"></div>
          </div>

          {/* Part tooltip */}
          {hoveredPart && (
            <div className="absolute top-2 left-0 right-0 mx-auto w-max bg-black/80 backdrop-blur-md border border-blue-500/30 rounded-lg px-3 py-2 text-white text-sm shadow-[0_0_10px_rgba(59,130,246,0.3)]">
              <p className="font-bold text-blue-400">{hoveredPart}</p>
              <p>{build.parts[hoveredPart]}</p>
            </div>
          )}
        </div>

        {/* PC Build Details */}
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(build.parts).map(([part, value]) => (
              <div key={part} className="text-sm">
                <span className="text-gray-400">{part}:</span>
                <p className="text-white truncate" title={value}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Budget */}
          <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Total Budget</p>
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                ${build.budget}
              </p>
            </div>

            {/* Download Button */}
            <Button
              onClick={onDownload}
              className="bg-black/50 hover:bg-black/70 text-white border border-blue-500/30 rounded-full group-hover:border-blue-500/60 transition-all duration-300"
              size="sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Quotation
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
