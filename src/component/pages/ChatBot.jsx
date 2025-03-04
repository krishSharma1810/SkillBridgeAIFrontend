"use client"

import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { Upload, Send, Trash2, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import NavBar from "../componentBlock/NavBar"
import Footer from "../componentBlock/Footer"

const API_URL = "https://skillbridge.duckdns.org:5000"

function ChatBot() {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [query, setQuery] = useState("")
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const messagesEndRef = useRef(null)
  const fileInputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    scrollToBottom()
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile)
    } else {
      setMessages([
        {
          type: "error",
          content: "Please select a valid PDF file.",
        },
      ])
    }
  }

  const handleUpload = async () => {
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)

    setUploading(true)
    setUploadProgress(0)

    try {
      const response = await axios.post(`${API_URL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          setUploadProgress(progress)
        },
      })

      console.log("upload success:", response.data)

      setMessages([
        {
          type: "system",
          content: `PDF "${file.name}" uploaded successfully! You can now ask questions about it.`,
        },
      ])
      setFile(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    } catch (error) {
      console.log("upload failed: ", error.response?.data || error.message)
      setMessages([
        {
          type: "error",
          content: `Error uploading PDF: ${error.response?.data?.error || error.message}`,
        },
      ])
    } finally {
      setUploading(false)
      setUploadProgress(0)
    }
  }

  const handleSendQuery = async (e) => {
    if (e) e.preventDefault()
    if (!query.trim() || loading) return

    const userQuery = query.trim()
    setMessages((prev) => [...prev, { type: "user", content: userQuery }])
    setQuery("")
    setLoading(true)

    try {
      const response = await axios.post(`${API_URL}/query`, { query: userQuery })
      setMessages((prev) => [...prev, { type: "assistant", content: response.data.response }])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "error",
          content: `Error: ${error.response?.data?.error || "Failed to get response. Please try again."}`,
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleClearHistory = async () => {
    try {
      await axios.post(`${API_URL}/clear`)
      setMessages([{ type: "system", content: "Chat history cleared. Please upload a new PDF." }])
    } catch (error) {
      console.error("Error clearing history:", error)
      setMessages((prev) => [
        ...prev,
        {
          type: "error",
          content: "Failed to clear chat history. Please try again.",
        },
      ])
    }
  }

  return (
    <div className="min-h-screen bg-black/[0.96] flex flex-col">

      <div className="flex-1 flex relative">
        {/* Back Button */}
        <button
          onClick={() => navigate("/home")}
          className="absolute top-4 left-4 z-50 text-white hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>

        {/* Sidebar */}
        <div
          className={`bg-zinc-900/50 transition-all duration-300 ${
            sidebarCollapsed ? "w-0 opacity-0" : "w-80 opacity-100"
          }`}
        >
          <div className="p-6 pt-15 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-lg font-semibold">Upload PDF</h2>
              <div>
                <label className="flex items-center gap-3 p-3 py-5 bg-zinc-800 border-2 border-dashed border-zinc-700 rounded-lg cursor-pointer transition-all hover:border-blue-500 hover:bg-blue-500/10">
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept=".pdf"
                    onChange={handleFileChange}
                    disabled={uploading}
                    className="hidden"
                  />
                  <Upload className="text-gray-400" />
                  <span className="text-sm text-gray-400">{file ? file.name : "Choose PDF"}</span>
                </label>
              </div>

              <button
                className="w-full py-3 px-4 rounded-lg font-medium text-sm bg-blue-600 text-white transition-all hover:bg-blue-700 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                onClick={handleUpload}
                disabled={!file || uploading}
              >
                {uploading ? (
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs">Uploading...</span>
                      <span className="text-xs">{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-zinc-700 rounded-full h-1.5">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  "Upload PDF"
                )}
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-white text-lg font-semibold">Chat Options</h2>
              <button
                className="w-full py-3 px-4 rounded-lg font-medium text-sm bg-red-600 text-white transition-all hover:bg-red-700 flex items-center justify-center gap-2"
                onClick={handleClearHistory}
              >
                <Trash2 className="w-4 h-4" /> Clear History
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Toggle */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-zinc-800 text-white p-2 rounded-r-lg hover:bg-zinc-700 transition-all z-50"
        >
          {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-zinc-900/30 relative">
          <div className="flex-1 p-8 overflow-y-auto">
            <div className="max-w-4xl mx-auto flex flex-col gap-6 pb-20">
              {messages.length === 0 && (
                <div className="text-center m-auto max-w-lg p-10 bg-zinc-800/50 rounded-2xl">
                  <h2 className="mb-4 text-blue-400 text-2xl font-semibold">Welcome! 👋</h2>
                  <p className="text-gray-400 mb-2">Upload a PDF file to get started.</p>
                  <p className="text-gray-400">You can then ask questions about the content of the PDF.</p>
                </div>
              )}

              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-3xl rounded-lg p-4 ${
                      message.type === "user"
                        ? "bg-blue-600 text-white"
                        : message.type === "assistant"
                          ? "bg-zinc-800 text-white"
                          : message.type === "system"
                            ? "bg-green-600 text-white"
                            : "bg-red-600 text-white"
                    }`}
                  >
                    {message.type === "assistant" && (
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-md bg-blue-500 flex items-center justify-center text-xs font-semibold">
                          AI
                        </div>
                      </div>
                    )}
                    <div className="whitespace-pre-wrap">{message.content}</div>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 rounded-lg p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-blue-500 flex items-center justify-center text-xs font-semibold text-white">
                        AI
                      </div>
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                        <span
                          className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                        <span
                          className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area - Fixed at bottom */}
          <div className="fixed absolute bottom-0 left-0 right-0 p-4">
            <form onSubmit={handleSendQuery} className="max-w-4xl mx-auto flex gap-4">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask a question about your PDF..."
                disabled={loading || messages.length === 0}
                className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 disabled:bg-zinc-900 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={loading || !query.trim() || messages.length === 0}
                className="px-5 py-3 bg-blue-600 text-white rounded-lg transition-all hover:bg-blue-700 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ChatBot

