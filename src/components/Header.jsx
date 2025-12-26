import React from 'react'
import {Sparkles} from 'lucide-react'
function Header() {
  return (
    <div className='p-5 bg-gray-950 flex text-white sticky top-0 border-b border-teal-800 transition-all duration-300
  hover:shadow-lg hover:shadow-teal-500/40 '>
      <h1 className='text-teal-500 hover:shadow-xl hover:scale-105'>
        <Sparkles 
        color="#14B8A6" 
        count={10} 
        minSize={5} 
        maxSize={10} 
        overflowPx={0} 
        />
      </h1>
      <h1>Sakshi</h1>
    </div>
  )
}

export default Header