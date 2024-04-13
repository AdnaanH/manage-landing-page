import Button from "./Button";
import heroImage from "../assets/images/illustration-intro.svg"

const Hero = ({
    title = 'Bring everyone together to build better products.',
    subtitle = 'Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.',
  }) => {
    return (
      <section className='min-h-screen w-full flex justify-between items-center px-24'>
        <div className='w-5/12 flex flex-col gap-8'>
            <h1 className="text-5xl font-bold font-BeVietnam text-FmarineBlue">{title}</h1>
            <p className="font-BeVietnam text-FcoolGray w-10/12 font-normal text-xl">{subtitle}</p>
            <Button width="w-4/12">Get Started</Button>
        </div>
        <div className="w-6/12">
            <img src={heroImage} alt="hero-image" />
        </div>
      </section>
    );
  };
  export default Hero;
  