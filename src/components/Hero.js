import React from 'react';
import hero from '../images/illustration-intro.svg';

function Hero() {
  return (
    <section className='overflow-hidden sm:px-28 px-4 flex relative top-0 min-h-screen w-full justify-between items-center'>
      <div className='w-6/12 flex flex-col'>
        <h1 className='text-5xl sm:w-10/12 w-full text-darkBlue font-bold'>Bring everyone together to build better products.</h1>
        <p className='mt-8 w-8/12 text-base text-darkGrayishBlue'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
        <div className='flex justify-start mt-4'>
          <button className='bg-brightRed px-6 py-2 mt-8 rounded-3xl text-white text-base font-medium'>Get started</button>
        </div>
      </div>
      <div className="w-5/12 relative">
        <img src={hero} alt="" />
      </div>
    </section>
  );
}

export default Hero;
