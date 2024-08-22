import React, { Fragment, useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = ({projects}) => {
  const [selected, setSelected] = useState("ALL")
  const [filteredProjects, setFilteredProjects] = useState(projects || null)

  const handleChange = (section) =>{
    setSelected(section)
  }
  useEffect(() => {
    setFilteredProjects(projects.filter(item => item.tags.includes(selected)))
  }, [selected])

  console.log("filtered" ,filteredProjects)
  
  return (
    <div id="projects" className="bg-light-primary dark:bg-dark-primary">
      <div className="mx-80 min-h-screen py-8">
        <div className="flex gap-4 p-4">
        <div className="border-l-[14px] border-light-secondary p-4 text-white text-5xl font-righteous font-bold tracking-wider">
        PROJECTS
        </div>
        </div>

        <div className='p-12 flex justify-center space-x-12 '>
          <button className={selected == "ALL" ? "font-epilogue text-light-background text-xl bg-light-secondary px-4 py-2 rounded-lg":"font-epilogue text-light-background text-xl px-4 py-2 rounded-lg"} onClick={()=>handleChange("ALL")}>ALL</button>
          <button className={selected == "AIML" ? "font-epilogue text-light-background text-xl bg-light-secondary px-4 py-2 rounded-lg":"font-epilogue text-light-background text-xl px-4 py-2 rounded-lg"} onClick={()=>handleChange("AIML")}>AI/ML</button>
          <button className={selected == "FS" ? "font-epilogue text-light-background text-xl bg-light-secondary px-4 py-2 rounded-lg":"font-epilogue text-light-background text-xl px-4 py-2 rounded-lg"} onClick={()=>handleChange("FS")}>Full Stack</button>
        </div>

        <div className='p-4 grid grid-cols-1 gap-8'>
          {filteredProjects?.map((project, key)=><Fragment key={key}><ProjectCard project={project}/></Fragment>)}
        </div>
      </div>
    </div>
  )
}

export default Projects