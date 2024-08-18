import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (theme == 'dark'){
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    console.log("Getting triggered")
    setTheme(theme == "dark" ?  "light" : "dark")
  }
  
  return (
    <div >
    <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme}/>
    <Home />
    <About />
    <Projects />
    <Contact />
    </div>
  )
}
