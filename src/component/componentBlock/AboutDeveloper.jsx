import { Github, Linkedin, Mail, Globe } from "lucide-react"

const AboutDeveloper = () => {
    return (
        <div className="min-h-screen w-full bg-black/[0.96] py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-16">
                    About the Developer
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="relative w-48 h-48 mx-auto md:mx-0">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
                            <img
                                src="/placeholder.svg?height=200&width=200"
                                alt="Developer"
                                className="relative rounded-full w-full h-full object-cover border-4 border-zinc-800"
                            />
                        </div>

                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-white mb-2">Krish Sharma</h3>
                            <p className="text-gray-400 mb-4">AI Enthusiast & Full Stack Developer</p>
                            <div className="flex justify-center md:justify-start space-x-4">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="mailto:developer@example.com" className="text-gray-400 hover:text-white transition-colors">
                                    <Mail className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://portfolio.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <Globe className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xl font-semibold text-white mb-4">Background</h4>
                            <p className="text-gray-400">
                                A passionate developer with expertise in full-stack development and artificial intelligence, specializing in building scalable AI-powered web applications. With a strong foundation in machine learning, NLP, and AI-driven automation, I focus on creating intelligent solutions that bridge the gap between technology and real-world applications. My experience spans designing, developing, and optimizing AI models, ensuring seamless integration into web platforms for enhanced user experiences. Committed to pushing the boundaries of AI innovation, I thrive on building efficient, data-driven applications that make technology more accessible and impactful.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-white mb-4">Technical Skills</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <h5 className="text-blue-400 font-medium">Core AI</h5>
                                    <ul className="text-gray-400 space-y-1">
                                        <li>Machine Learning & Deep Learning</li>
                                        <li>Natural Language Processing (NLP) </li>
                                        <li>Computer Vision</li>
                                        <li>Knowledge Graphs</li>
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <h5 className="text-blue-400 font-medium">AI Frameworks & Libraries</h5>
                                    <ul className="text-gray-400 space-y-1">
                                        <li>TensorFlow / PyTorch</li>
                                        <li>Hugging Face </li>
                                        <li>LangChain / LangFlow </li>
                                        <li>Scikit-Learn </li>
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <h5 className="text-purple-400 font-medium">AI Application Areas</h5>
                                    <ul className="text-gray-400 space-y-1">
                                        <li>AI Chatbots & Assistants</li>
                                        <li>AI-powered Search & Recommendations</li>
                                        <li>AI-driven Analytics & Insights</li>
                                        <li>Healthcare AI</li>
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <h5 className="text-purple-400 font-medium">WebDevelopment</h5>
                                    <ul className="text-gray-400 space-y-1">
                                        <li>React.js</li>
                                        <li>Node.js</li>
                                        <li>MongoDB</li>
                                        <li>GSAP</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-white mb-4">Current Focus</h4>
                            <p className="text-gray-400">
                                Currently focused on developing AI-powered applications that enhance learning experiences and make
                                education more accessible. Passionate about combining cutting-edge technology with intuitive user
                                experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutDeveloper

