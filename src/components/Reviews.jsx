import { useState, useEffect } from "react";
import Card from "./Card";

const Cards = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cards]);

  const slides = () => {
    const endIndex = isSmallScreen ? currentIndex + 1 : currentIndex + 3;
    let slicedCards = cards.slice(currentIndex, endIndex);

    if (!isSmallScreen && slicedCards.length < 3) {
      const remainingCards = 3 - slicedCards.length;
      slicedCards = [...slicedCards, ...cards.slice(0, remainingCards)];
    }

    return slicedCards.map((card, index) => (
      <Card key={index}>
        <img src={card.imgUrl} alt={card.name} className="w-[75px] h-[75px] relative -top-8" />
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="font-bold text-FmarineBlue font-BeVietnam text-base mb-2">{card.name}</h1>
          <p className="text-center text-FcoolGray text-sm font-BeVietnam font-bold mb-6">"{card.comment}"</p>
        </div>
      </Card>
    ));
  };

  return (
    <div className={`flex justify-${isSmallScreen ? 'center' : 'between'} items-center sm:gap-6 gap-0 py-20 w-full`}>
      {slides()}
    </div>
  );
};

export default Cards;
