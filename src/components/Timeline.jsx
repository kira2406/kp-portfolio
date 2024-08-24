import React, { Fragment } from 'react'
import { motion } from "framer-motion";


const Timeline = ({events}) => {
  return (
    <div className='flex flex-col gap-y-2 w-full mb-4'>
        <Circle />
        {events.map((event, key) => (
            <Fragment key={key}>
                <motion.div initial={{opacity:0, x:100}} whileInView={{opacity:1, x:0}} transition={{duration: 0.5}}  className='grid grid-cols-[auto_1fr] gap-x-2 items-center ml-auto'>
                    {event.direction == "left"?(
                        <LeftEventCard heading={event.heading} year={event.year} course={event.course} logo={event.logo} description={event.description}/>)
                        :
                        (<div></div>)}
                    <Pillar />
                    {/* {event.direction == "right"?(
                        <RightEventCard heading={event.heading} year={event.year} course={event.course} logo={event.logo} description={event.description}/>)
                        :
                        (<div></div>)
                    } */}
                </motion.div>
            </Fragment>
        ))}
        <Circle />
    </div>

  )
}

const Circle = () => {
    return (<motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5}} className=' w-3 h-3 bg-light-primary ml-auto '></motion.div>)
}

const Pillar = () => {
    return (<div className='w-3 h-full bg-light-background ml-auto'></div>)
}

const LeftEventCard = ({heading, year, course, description, logo}) => {
    return (<div className='flex flex-row-reverse gap-x-4 p-2 items-start'>
        <img src={logo} className='mx-auto h-16 rounded-lg'/>
        <div className='flex flex-col items-end'>
            <div className='text-xl font-righteous text-light-background text-right'>{heading}</div>
            <div className='text-xl font-jura text-light-background text-right font-bold'>{year}</div>
            <div className='text-2xl font-jura text-lightblue text-right tracking-tighter leading-6'>{course}</div>
            <div className='text-xl font-jura text-light-background tracking-tight leading-6 text-justify'>{description}</div>
        </div>
    </div>)
}

const RightEventCard = ({heading, year, course, description, logo}) => {
    return (<div className='flex flex-row gap-x-2 p-2 items-start'>
        <img src={logo} className='mx-auto h-16 rounded-lg'/>
        <div className='flex flex-col'>
            <div className='text-xl font-righteous text-light-background '>{heading}</div>
            <div className='text-xl font-jura text-light-background font-bold'>{year}</div>
            <div className='text-2xl font-jura text-lightblue tracking-tighter leading-6 '>{course}</div>
            <div className='text-xl font-jura text-light-background tracking-tight leading-6 text-right'>{description}</div>
        </div>
    </div>)
}

export default Timeline