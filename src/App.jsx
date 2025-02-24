import Welcome from "./component/pages/Welcome"
import Home from "./component/pages/Home"
import About from "./component/pages/About"
import Chatbot from "./component/pages/ChatBot"
import Contact from "./component/pages/Contact"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App

