import React from 'react'
import Carousel from './Carousel'

function SectionTwo() {
  return (
    <section className='min-h-screen sm:py-24 py-4 flex flex-col justify-center items-center sm:px-28 px-4'>
        <h2 className='text-4xl text-center font-semibold w-full text-darkBlue'>What they’ve said</h2>
            <Carousel />        
        <button className='bg-brightRed px-6 py-2 rounded-3xl text-white text-base font-medium'>Get started</button>
    </section>
  )
}

export default SectionTwo