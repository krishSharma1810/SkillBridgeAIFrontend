import React from 'react'
import TechnologyCard from "../ui/TechnologyCard"

function AboutSection2() {
  const technologies = [
    {
      about:
        "LangChain is an advanced framework for building AI-powered applications with Large Language Models (LLMs). It enables seamless integration of external data sources, memory, and reasoning capabilities, making AI workflows more dynamic and context-aware.",
      name: "🧠 LangChain",
      svg: "src/assests/Langchain--Streamline-Simple-Icons.svg"
    },
    {
      about:
        "Hugging Face is a leading AI platform offering state-of-the-art machine learning models, including NLP, computer vision, and generative AI. It provides easy access to pre-trained models and tools like Transformers for fine-tuning and deployment.",
      name: "🤗 Hugging Face",
      svg: "src/assests/Huggingface--Streamline-Simple-Icons.svg"
    },
    {
      about:
        "DataStax provides a powerful, scalable NoSQL database built on Apache Cassandra. With AstraDB, it offers cloud-native, high-performance storage solutions optimized for real-time AI and big data applications.",
      name: "📦 DataStax",
      svg: "src/assests/Datastax--Streamline-Simple-Icons.svg"
    },
    {
      about:
        "AI Agents are intelligent programs designed to autonomously perform tasks, reason, and interact with users or other systems. They leverage LLMs, APIs, and memory to provide adaptive, context-aware responses and automate complex workflows.",
      name: "🤖 AI Agents",
      svg: "src/assests/agent-detective-svgrepo-com.svg"
    },
  ];
  return (
    <div className='h-screen w-[100%] bg-black/[0.96] pt-[10%]'>
      <h1
        className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Technologies Used
      </h1>
      <TechnologyCard technologies={technologies} />
      <p
          className="mt-[8%] font-normal text-3xl text-neutral-300 max-w-4xl ml-[2%]">
          And More.....
          </p>
    </div>
  );
}

export default AboutSection2