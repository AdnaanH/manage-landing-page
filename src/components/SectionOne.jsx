const SectionOne = () => {
  return (
    <section className='sm:min-h-screen min-h-96 w-full flex sm:flex-row flex-col justify-between items-start py-16 sm:px-24 px-6'>
        <div className="sm:w-5/12 w-full flex flex-col gap-10">
            <h1 className="sm:text-4xl text-3xl sm:text-start text-center font-bold font-BeVietnam text-FmarineBlue">What’s different about Manage?</h1>
            <p className="font-BeVietnam text-FcoolGray sm:w-10/12 w-full sm:text-start text-center font-normal sm:text-xl text-base">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
        </div>
        <div className="w-6/12 flex flex-col justify-start items-start gap-6">
            <div className="flex justify-between items-start gap-10">
                <strong className="py-1 px-6 bg-FstrawberryRed rounded-2xl text-white font-BeVietnam">01</strong>
                <div className="flex flex-col">
                    <h2 className="text-lg font-BeVietnam text-FmarineBlue font-bold mb-2">Track company-wide progress</h2>
                    <p className="font-BeVietnam w-11/12 text-FcoolGray font-normal text-lg">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                </div> 
            </div>
            <div className="flex justify-between items-start gap-10">
                <strong className="py-1 px-6 bg-FstrawberryRed rounded-2xl text-white font-BeVietnam">02</strong>
                <div className="flex flex-col">
                    <h2 className="text-lg font-BeVietnam text-FmarineBlue font-bold mb-2">Advanced built-in reports</h2>
                    <p className="font-BeVietnam w-11/12 text-FcoolGray font-normal text-lg">Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                </div> 
            </div>
            <div className="flex justify-between items-start gap-10">
                <strong className="py-1 px-6 bg-FstrawberryRed rounded-2xl text-white font-BeVietnam">03</strong>
                <div className="flex flex-col">
                    <h2 className="text-lg font-BeVietnam text-FmarineBlue font-bold mb-2">Everything you need in one place</h2>
                    <p className="font-BeVietnam w-11/12 text-FcoolGray font-normal text-lg">Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                </div> 
            </div>
        </div>
        
    </section>
  )
}

export default SectionOne
