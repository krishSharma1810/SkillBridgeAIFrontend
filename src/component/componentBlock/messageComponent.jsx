"use client"
import { motion } from "framer-motion"
import { useTypewriter } from "../ui/typewriter"

export function Message({ message, isLatest }) {
  const { displayedText, isTyping } = useTypewriter(message.content, 30, isLatest ? 500 : 0)

  const content = isLatest ? displayedText : message.content

  const messageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <motion.div
      variants={messageVariants}
      initial="initial"
      animate="animate"
      className={`message ${message.type} max-w-3xl mx-auto`}
    >
      <div
        className={`
        p-4 rounded-lg
        ${message.type === "user" ? "bg-blue-600 ml-auto" : ""}
        ${message.type === "assistant" ? "bg-zinc-800" : ""}
        ${message.type === "system" ? "bg-green-600" : ""}
        ${message.type === "error" ? "bg-red-600" : ""}
      `}
      >
        <div className="flex gap-3 items-start">
          {message.type === "assistant" && (
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
              AI
            </div>
          )}
          <div className="flex-1 text-white">
            {content.split("\n").map((text, i) => (
              <p key={i} className="mb-2 last:mb-0">
                {text}
              </p>
            ))}
            {isLatest && isTyping && message.type === "assistant" && (
              <span className="inline-block w-1 h-4 bg-blue-400 ml-1 animate-blink" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

