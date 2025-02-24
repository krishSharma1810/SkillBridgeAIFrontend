"use client"

import { useState, useEffect } from "react"

export function useTypewriter(text, speed = 30, delay = 0) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timeout
    let currentIndex = 0
    setIsTyping(true)
    setDisplayedText("")

    // Initial delay before starting to type
    timeout = setTimeout(() => {
      const typeNextCharacter = () => {
        if (currentIndex < text.length) {
          setDisplayedText((prev) => prev + text[currentIndex])
          currentIndex++
          timeout = setTimeout(typeNextCharacter, speed)
        } else {
          setIsTyping(false)
        }
      }

      typeNextCharacter()
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, speed, delay])

  return { displayedText, isTyping }
}

