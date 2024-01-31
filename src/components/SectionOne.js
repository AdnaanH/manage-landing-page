import React from 'react'

function SectionOne() {
  return (
    <section className='min-h-screen sm:py-24 py-4 flex justify-between items-start sm:px-28 px-4'>
        <div className="w-6/12">
            <h2 className='text-4xl font-semibold w-10/12 text-darkBlue'>What’s different about Manage?</h2>
            <p className='text-darkGrayishBlue w-7/12 mt-6 text-base'>Manage provides all the functionality your team needs, without 
                the complexity. Our software is tailor-made for modern digital 
                product teams.</p>
        </div>
        <div className="flex ml-14 flex-col w-6/12">
            <div className="flex gap-6 items-start">
                <strong className='bg-brightRed text-white py-1 px-4 text-base rounded-3xl'>01</strong>
                <div className='flex flex-col'>
                    <h3 className='text-darkBlue text-base font-semibold mt-2'>Track company-wide progress</h3>
                    <p className='text-darkGrayishBlue text-base mt-2'>See how your day-to-day tasks fit into the wider vision. Go from 
                        tracking progress at the milestone level all the way done to the 
                        smallest of details. Never lose sight of the bigger picture again.</p>
                </div>
            </div>
            <div className="flex gap-6 items-start mt-4">
                <strong className='bg-brightRed text-white py-1 px-4 text-base rounded-3xl'>02</strong>
                <div className='flex flex-col'>
                    <h3 className='text-darkBlue text-base font-semibold mt-2'>Advanced built-in reports</h3>
                    <p className='text-darkGrayishBlue text-base mt-2'>Set internal delivery estimates and track progress toward company 
                        goals. Our customisable dashboard helps you build out the reports 
                        you need to keep key stakeholders informed.</p>
                </div>
            </div>
            <div className="flex gap-6 items-start mt-4">
                <strong className='bg-brightRed text-white py-1 px-4 text-base rounded-3xl'>03</strong>
                <div className='flex flex-col'>
                    <h3 className='text-darkBlue text-base font-semibold mt-2'>Everything you need in one place</h3>
                    <p className='text-darkGrayishBlue text-base mt-2'>Stop jumping from one service to another to communicate, store files, 
                        track tasks and share documents. Manage offers an all-in-one team 
                        productivity solution.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionOne