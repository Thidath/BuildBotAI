"use client"

import { motion } from "framer-motion"
import PC3DViewer from "@/components/PC3DViewer"
import { generateBuildPDF } from "@/lib/pdfutils" 

interface BuildCardProps {
  build: {
    cpu: string
    gpu: string
    ram: string
    motherboard: string
    total_cost: string
  }
  show3D?: boolean
  isHighlighted?: boolean
}

export default function BuildCard({ build, show3D = false, isHighlighted = false }: BuildCardProps) {
  const handleDownloadPDF = () => {
    generateBuildPDF(build) 
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: isHighlighted
          ? "0 0 30px rgba(255, 255, 255, 0.4)"
          : "0 0 20px rgba(59,130,246,0.3)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`rounded-2xl p-6 shadow-lg text-white transition-all duration-300 border backdrop-blur-md ${
        isHighlighted
          ? "bg-gradient-to-br from-cyan-700/40 to-cyan-900/30 border-cyan-500/40"
          : "bg-gradient-to-br from-blue-800/30 via-blue-700/20 to-cyan-800/20 border-blue-400/20"
      }`}
    >
      {show3D && (
        <div className="h-[320px] w-full mb-6">
          <PC3DViewer />
        </div>
      )}

      <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">
        Recommended Build
      </h3>

      <div className="space-y-2 text-sm text-center">
        <p><strong>CPU:</strong> {build.cpu}</p>
        <p><strong>GPU:</strong> {build.gpu}</p>
        <p><strong>RAM:</strong> {build.ram}</p>
        <p><strong>Motherboard:</strong> {build.motherboard}</p>
        <p className="mt-2 text-blue-300">
          <strong> Total Cost:</strong> ${build.total_cost}
        </p>
      </div>

      <div className="mt-4 text-center">
        <button
          onClick={handleDownloadPDF}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-full text-sm mt-4"
        >
          📄 Download Quotation
        </button>
      </div>
    </motion.div>
  )
}