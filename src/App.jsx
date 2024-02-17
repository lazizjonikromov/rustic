import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import AboutUs from "./pages/about-us/AboutUs"
import Main from "./pages/main/Main"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/about" element={<AboutUs />}/>
      </Routes>
    </>
  )
}

export default App