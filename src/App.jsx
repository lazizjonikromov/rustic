import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import AboutUs from "./pages/about-us/AboutUs"
import Main from "./pages/main/Main"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Projects from "./pages/our-projects/Projects"
import Posts from "./pages/our-posts/Posts"

function App() {

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/posts" element={<Posts />}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App
