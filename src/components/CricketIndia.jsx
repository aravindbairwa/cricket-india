import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Ive added comments for each line as I havent seen many people use gsap, so just in case.
// This is basically a svg animation, here, ive represented it as a component but it can just be svg with inline styles and a single script.

const CricketIndia = () => {
  const svgRef = useRef(null);
  const cricketTextRef = useRef(null);
  const indiaTextRef = useRef(null);

  useEffect(() => {
    const cricketText = cricketTextRef.current;
    const indiaText = indiaTextRef.current;
    const mySVG = svgRef.current;

    const tl = gsap.timeline();

    // Animate "Cricket" text after 1 second
    tl.fromTo(cricketText, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power2.in', delay: 1 });

    // Animate "India" text after "Cricket" text animation
    tl.fromTo(indiaText, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power2.in' }, '-=1');

    // Zoom in animation after SVG and India text animation ends
    tl.call(
      () => {
        gsap.fromTo(
          mySVG,
          { scale: 1, opacity: 1 },
          { scale: 10, opacity: 0, duration: 1, ease: 'power2.inOut' }
        );
      },
      null,
      '+=0.5'
    );

  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 20, position: 'absolute', background: '#efefef' }}>
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="100"
        viewBox="0 0 200 100"
        id="mySVG"
      >
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        </style>

        <rect width="200" height="100" fill="#0085ca" />

        <text
          ref={cricketTextRef}
          x="50%"
          y="40%"
          font-family="Roboto"
          font-size="30"
          fill="#fff"
          text-anchor="middle"
          dominant-baseline="middle"
        >
          Cricket
        </text>

        <text
          ref={indiaTextRef}
          x="50%"
          y="70%"
          font-family="Roboto"
          font-size="40"
          fill="#f0cfa0"
          text-anchor="middle"
          dominant-baseline="middle"
        >
          India
        </text>
      </svg>
    </div>
  );
};

export default CricketIndia;
