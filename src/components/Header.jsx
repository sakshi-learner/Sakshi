import React from 'react';
import { Sparkles , Download} from 'lucide-react';

function Header() {
  return (
    <div className='p-5 bg-gray-950 flex justify-between items-center text-white sticky top-0 border-b border-teal-800 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/40'>
      
      <h1 className='flex items-center gap-2 text-teal-500 hover:shadow-xl hover:scale-105'>
        <Sparkles 
          color="#14B8A6" 
          count={10} 
          minSize={5} 
          maxSize={10} 
          overflowPx={0} 
        />
        Sakshi
      </h1>

      {/* Resume download button */}
      <a
  href={`${import.meta.env.BASE_URL}ResumeSakshisingh.pdf`}
  download
  className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-black font-semibold py-2 px-4 rounded"
>
  Resume <Download />
</a>
    </div>
  );
}

export default Header;
