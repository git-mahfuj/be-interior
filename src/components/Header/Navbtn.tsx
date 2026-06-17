import React from 'react';

const Navbtn = () => {
  return (
    <div className="w-full md:h-full flex items-center">
      <button className="w-full md:w-auto md:h-full px-6 py-3 md:px-10 bg-primary text-white font-medium text-lg md:text-2xl tracking-wider hover:bg-[#c35e00] transition-colors rounded-lg md:rounded-none">
        Calculate
      </button>
    </div>
  );
};

export default Navbtn;