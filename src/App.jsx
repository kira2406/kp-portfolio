import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import { useEffect, useState } from "react";
import Tech from "./pages/Tech";
import { projects, skills } from "./constants";
import Resume from "./assets/KP_Resume.pdf"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";

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
    setTheme(theme == "dark" ?  "light" : "dark")
  }

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Kushwanth_Parameshwaraiah_Resume.pdf'; // Set the name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="max-w-full overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
              <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme}/>
              <Home handleResumeDownload={handleResumeDownload}/>
              <About />
              <Projects projects={projects}/>
              <Tech skills={skills}/>
              </>
            }
            />
            <Route path="/projects/:id" element={
              <>
              <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} isHome={false}/>
              <ProjectDetails />
              </>} />
        </Routes>
    </BrowserRouter>
    <Contact handleResumeDownload={handleResumeDownload}/>
    </div>
  )
}
