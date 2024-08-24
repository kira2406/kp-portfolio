import React, { Fragment } from 'react'

const Tech = ({skills}) => {
  return (
    <div id="skills"
    className="dark:bg-dark-background bg-light-background py-8 min-h-screen h-full">
        <div className="mx-4 md:mx-16 lg:mx-80 py-4 md:py-6 lg:py-8">
        <div className="flex gap-4 px-4 py-2 md:p-4">
        <div className="border-l-[14px] border-light-primary p-4 text-light-secondary dark:text-dark-text text-3xl md:text-4xl lg:text-5xl font-righteous font-bold tracking-wider">
        SKILLS
        </div>
        </div>
        <div className='w-full py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start px-8 md:px-0'>
        {skills.map((parentSkill, key)=>(
          <Fragment key={key}>
            <div className='w-full lg:w-64 px-4 py-6 my-4 bg-white dark:bg-gray-800 rounded-xl transform transition-all hover:-translate-y-2 duration-300  shadlow-lg dark:shadow-light-secondary hover:shadow-xl items-center'>

              <h2 className='font-epilogue text-lg py-2 text-center text-light-secondary dark:text-dark-text'>{parentSkill.heading}</h2>
              {parentSkill.tech.map((skill, key)=>(
                <Fragment key={key}>
                  <div className={skill.logo?'grid grid-cols-2 py-2':'grid grid-cols-1 py-2 place-items-center'}>
                    {skill.logo && <img src={skill.logo} className='h-8 place-self-center'/>}
                    <p className={skill.logo?'font-jura text-xl text-gray-400':'font-jura text-xl text-gray-400 text-center'}>{skill.desc}</p>
                  </div>    
                </Fragment>
              ))}
              </div>

          </Fragment>
        ))}

        </div>

        </div>
    </div>
  )
}

export default Tech