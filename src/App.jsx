import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import AboutUs from "./pages/about-us/AboutUs"
import Main from "./pages/main/Main"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Projects from "./pages/our-projects/Projects"
import Posts from "./pages/our-posts/Posts"
import Contact from "./pages/contact/Contact"
import UpButton from "./components/UpButton"
import Menu from "./components/Menu"
import { useState } from "react"

function App() {
  const [burger, setBurger] = useState(false);

  return (
    <>
      <Navbar setBurger={setBurger}/>
      <Menu burger={burger} setBurger={setBurger}/>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/posts" element={<Posts />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>

      <Footer />
      <UpButton />
    </>
  )
}

export default App
