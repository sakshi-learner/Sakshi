import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { education} from '../../resources/Education'

function Education() {

    const [selectedItemIndex, setSelectedIndex] = useState(0);
    
  return (
  
  <div className='bg-gray-900  py-10 px-5'>
  <SectionTitle title="Education" />

  {/* Parent flex: column on mobile, row on desktop */}
  <div className='flex flex-col md:flex-row gap-6 md:gap-10 mt-10'>

    {/* Experience List */}
    <div className="flex flex-row md:flex-col gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible px-2 md:px-0">
      {education.map((education, index) => (
        <div
          key={index}
          onClick={() => setSelectedIndex(index)}
          className='cursor-pointer shrink-0'
        >
          <h1
            className={`text-lg md:text-xl px-4 md:px-10 py-2 md:py-3  whitespace-nowrap
              ${
                selectedItemIndex === index
                  ? 'text-teal-500 border-teal-500 border-l-4 bg-[#21738154]'
                  : 'text-white'
              }`}
          >
            {education.course}
          </h1>
        </div>
      ))}
    </div>

    {/* Detail Card */}
    <div
      className={`
        flex-1 border border-teal-700  p-5
        transition-all duration-300
        ${selectedItemIndex !== null ? 'shadow-md shadow-teal-500/30 scale-102' : ''}
        hover:shadow-md hover:shadow-teal-500/20 hover:scale-102
      `}
    >
      <h1 className='text-teal-400 text-2xl md:text-3xl'>
        {education[selectedItemIndex].course}
      </h1>
      <h1 className='text-white mt-4 text-lg md:text-xl'>
        {education[selectedItemIndex].school}
      </h1>
      <p className='text-gray-300 mt-2 text-sm md:text-base'>
        {education[selectedItemIndex].batch}
      </p>
      <p className='text-gray-300 mt-2 text-sm md:text-base'>
        {education[selectedItemIndex].cgpa}
      </p>
    </div>
  </div>
</div>

   
  )
}

export default Education