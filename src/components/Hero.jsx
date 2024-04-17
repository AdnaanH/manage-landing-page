import Button from "./Button";
import heroImage from "../assets/images/illustration-intro.svg"

const Hero = ({
    title = 'Bring everyone together to build better products.',
    subtitle = 'Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.',
  }) => {
    return (
      <section className='sm:min-h-screen min-h-96 w-full flex sm:flex-row flex-col-reverse justify-between items-center sm:px-24 px-6'>
        <div className='sm:w-5/12 w-full flex flex-col gap-8'>
            <h1 className="sm:text-left text-center sm:text-5xl text-3xl font-bold font-BeVietnam text-FmarineBlue">{title}</h1>
            <p className="font-BeVietnam text-FcoolGray sm:w-10/12 w-full font-normal sm:text-xl text-lg sm:text-left text-center">{subtitle}</p>
            <div className="sm:w-4/12 w-full flex sm:justify-start justify-center items-center">
                <Button width="full">Get Started</Button>
            </div>
        </div>
        <div className="sm:w-6/12 w-full">
            <img src={heroImage} alt="hero-image" />
        </div>
      </section>
    );
  };
  export default Hero;
  