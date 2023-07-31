import React, { useEffect, useState } from "react";
import CricketIndia from "../components/CricketIndia";
import Table from "../components/Table";

const Home: React.FC = () => {
  // Ensures the gsap animation is only visible when the user first arrives at the home page
   const [showAnimation, setShowAnimation] = useState(() => {
    const localStorageValue = localStorage.getItem('showAnimation');
    return localStorageValue === null;
  });

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false)
      localStorage.setItem('showAnimation', 'false');
    }, 4200);
  }, [showAnimation]);

  return (
    <div className="relative">
      {showAnimation ? (
        <CricketIndia />
       ) : ( 
        <section>
          <div className="flex flex-col justify-center items-center p-20 h-[100vh]">
            <Table />
          </div>

          <div className="air air1"></div>
          <div className="air air2"></div>
          <div className="air air3"></div>
          <div className="air air4"></div>
        </section>
      )}
    </div>
  );
};

export default Home;
