import React from 'react'

function SectionTitle({title,}) {
  return (

    <div className='flex gap-10 items-center py-10 px-20'>
      <h1 className=' text-3xl text-teal-500 '>{title}</h1>
      <div className='w-60 h-px bg-teal-500'>

      </div>
    </div>
    
  )
}

export default SectionTitle