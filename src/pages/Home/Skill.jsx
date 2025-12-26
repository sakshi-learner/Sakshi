import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function Skill() {
  const skill = [
                 "Core Java",
                "HTML",
                "CSS",
                "JavaScript",
                "MySQL",
                "MongoDB",
                "Express.js",
                "Node.js",
                "React.js",
                "R Programming",
                "MS Excel",
                "MS Word",
                  
                
            ]
  return (
    <div className='py-5 bg-gray-800'>
  <SectionTitle title="Skill" />
  <h1 className='text-white text-xl px-5 md:px-20'>
    Technologies I've been working with :
  </h1>

  <div className='flex flex-wrap gap-5 md:gap-10 p-5 mt-5 justify-center'>
    {skill.map((item, index) => (
      <div
        key={index}
        className="
          border border-teal-600 px-6 py-3 
          transition-all duration-300
          hover:shadow-lg hover:shadow-teal-500/40 hover:scale-105
          active:shadow-lg active:shadow-teal-500/40 active:scale-105
        "
      >
        <h1 className='text-teal-500 text-center'>{item}</h1>
      </div>
    ))}
  </div>
</div>

  )
}

export default Skill