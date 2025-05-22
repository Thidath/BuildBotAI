"use client"

import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import axios from "axios"
import PC3DViewer from "@/components/PC3DViewer"
import BuildCard from "@/components/BuildCard"

type Message = {
  id: string
  text: string
  sender: "user" | "bot"
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi there! I'm BuildBotAI. Tell me what kind of PC you're looking for, and I'll recommend some builds for you!",
      sender: "bot",
    },
  ])
  const [input, setInput] = useState("")
  const [builds, setBuilds] = useState<any[]>([])
  const [showMore, setShowMore] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    }
    setMessages((prev) => [...prev, newMessage])
    setInput("")
    setBuilds([])

    try {
      const response = await axios.post("http://127.0.0.1:8000/get_recommendations", {
        query: newMessage.text,
      })

      const buildsData = response.data

      if (Array.isArray(buildsData)) {
        setBuilds(buildsData)
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            text: "Here are the best PC Build options based on your input! 🚀",
            sender: "bot",
          },
        ])
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            text: "Sorry, no builds matched your requirements. Please try a different query!",
            sender: "bot",
          },
        ])
      }
    } catch (error) {
      console.error("Error fetching recommendations:", error)
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          text: "Sorry, something went wrong. Please try again!",
          sender: "bot",
        },
      ])
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-blue-950 to-black relative">
      <ParticleBackground />
      <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full p-4 md:p-6 relative z-10">
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6 text-center">
          BuildBotAI Chat
        </div>

        {/* Chat Bubbles */}
        <div className="flex-1 overflow-y-auto mb-6 backdrop-blur-md bg-black/30 rounded-2xl border border-blue-500/20 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl whitespace-pre-line ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-blue-600/40 to-blue-700/40 text-white border border-blue-500/30"
                      : "bg-gradient-to-r from-gray-800/60 to-gray-900/60 text-gray-200 border border-cyan-500/20"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Top Build with 3D PC */}
          {builds.length > 0 && (
            <div className="mt-10 border border-cyan-400 rounded-xl p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="h-[320px] w-full md:w-1/2">
                <PC3DViewer />
              </div>
              <div className="w-full md:w-1/2">
                <BuildCard build={builds[0]} />
              </div>
            </div>
          )}

          {/* Show More Button */}
          {builds.length > 1 && !showMore && (
            <div className="flex justify-center mt-6">
              <Button onClick={() => setShowMore(true)} className="bg-cyan-600 text-white px-6 py-2 rounded-full">
                Show More Builds
              </Button>
            </div>
          )}

          {/* Other Builds without 3D */}
          {showMore && builds.length > 1 && (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {builds.slice(1).map((build, index) => (
                <BuildCard key={index + 1} build={build} />
              ))}
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="backdrop-blur-xl bg-black/40 border border-blue-500/30 rounded-full flex items-center p-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about PC builds..."
            className="flex-1 bg-transparent border-0 text-white placeholder:text-gray-400"
          />
          <Button onClick={handleSendMessage} className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 p-2 ml-2" size="icon">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}