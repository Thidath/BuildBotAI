import Link from "next/link"
import { Button } from "@/components/ui/button"
import ParticleBackground from "@/components/particle-background"
import StepRoadmap from "@/components/step-roadmap"
import PcIllustration from "@/components/pc-illustration"
import BuildCard from "@/components/BuildCard"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-blue-950 to-black relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Background circuit pattern */}
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzA2MjY0QSIgc3Ryb2tlLXdpZHRoPSIwLjUiPjxwYXRoIGQ9Ik0zNiAxOGgxMk0xOCAxOEg2TTYgNDJoMTJNNDIgNDJoMTJNMzAgMzB2MTJNMzAgMTh2MTIiLz48L2c+PC9nPjwvc3ZnPg==')]"
        style={{ opacity: 0.2 }}
      ></div>

      {/* Glassmorphism container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 text-center">
        <div className="backdrop-blur-xl bg-black/30 p-8 sm:p-12 rounded-3xl border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.25)]">
          {/* Glowing orb decorations */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-600 rounded-full filter blur-[100px] opacity-30"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500 rounded-full filter blur-[100px] opacity-30"></div>

          {/* Title with glow effect */}
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 tracking-tight">
            BuildBotAI
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">Just Say the Word. We will build the perfect PC for you!.</p>

          {/* 3-step roadmap */}
          <StepRoadmap />

          {/* Glowing button */}
          <Link href="/chatbot">
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-6 text-lg rounded-full hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105">
              Get Started
              <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Floating elements for futuristic feel */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] animate-pulse"></div>
      <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_2px_rgba(34,211,238,0.7)] animate-pulse delay-300"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] animate-pulse delay-700"></div>
      <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-cyan-500 rounded-full shadow-[0_0_10px_2px_rgba(34,211,238,0.7)] animate-pulse delay-500"></div>
    </div>
  )
}
