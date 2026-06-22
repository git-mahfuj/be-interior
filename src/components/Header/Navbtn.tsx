import Link from 'next/link';
import React from 'react';

const Navbtn = () => {
  return (
    <div className="w-full md:h-full flex items-center">
        <Link href={'/services/budget-calculator'} className='w-45 h-full flex items-center justify-center bg-primary text-white font-medium text-lg md:text-2xl tracking-wider hover:bg-[#c35e00] transition-colors rounded-lg md:rounded-none'>
        <p className='text-center'>Calculate</p>
        </Link>
    </div>
  );
};

export default Navbtn;