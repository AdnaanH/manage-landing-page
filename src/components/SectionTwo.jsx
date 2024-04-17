import Button from "./Button"
import Reviews from "./Reviews"
import data from '../reviews.json'

const SectionTwo = () => {

  return (
    <section className='sm:min-h-screen min-h-96 w-full flex flex-col justify-center items-center sm:mb-0 mb-16'>
        <h1 className=" text-4xl text-FmarineBlue font-bold font-BeVietnam w-full text-center sm:mb-0 mb-12">What they’ve said</h1>
        <Reviews cards={data} />
        <Button width="3/12">Get Started</Button>
    </section>
  )
}

export default SectionTwo
