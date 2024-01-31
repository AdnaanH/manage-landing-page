import Card from './Card'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import anisha from '../images/avatar-anisha.png'
import ali from '../images/avatar-ali.png'
import shanai from '../images/avatar-shanai.png'
import richard from '../images/avatar-richard.png'

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <Slider {...settings}>
            <Card
                imageSrc={anisha}
                title="Anisha Li"
                description=" “Manage has supercharged our team’s workflow. The ability to maintain 
                visibility on larger milestones at all times keeps everyone motivated.” "
            />
            <Card
                imageSrc={ali}
                title="Ali Bravo"
                description="  “We have been able to cancel so many other subscriptions since using 
                Manage. There is no more cross-channel confusion and everyone is much 
                more focused.” "
            />
            <Card
                imageSrc={richard}
                title="Richard Watts"
                description=" “Manage allows us to provide structure and process. It keeps us organized 
                and focused. I can’t stop recommending them to everyone I talk to!” "
            />
            <Card
                imageSrc={shanai}
                title="Shanai Gough"
                description="“Their software allows us to track, manage and collaborate on our projects 
                from anywhere. It keeps the whole team in-sync without being intrusive.”"
            />          
      </Slider>
    </div>
  );
};

export default Carousel;
