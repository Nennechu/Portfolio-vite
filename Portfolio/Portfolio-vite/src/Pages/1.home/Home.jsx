import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import SimpleBar from 'simplebar-react';

const Home = () => {
  const controlsHello = useAnimation();
  const controlsName = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    controlsHello.start({ opacity: scrollY > 0 ? 0 : 1, y: scrollY > 0 ? -100 : 0 });
    controlsName.start({ opacity: scrollY > 0 ? 0 : 1, y: scrollY > 0 ? -100 : 0 });
  };

  // Add event listener for scroll
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Top Section with Animation */}
      <div id="scrollable-content" className="h-screen flex flex-col items-center justify-center rounded-3xl overflow-hidden">
        <motion.p
          className='text-9xl font-bold font-open mt-[-200px] text-neon6'
          animate={controlsHello}
        >
          HI THERE, I'M
        </motion.p>
        <motion.p
          className='text-9xl font-bold font-open text-neon6'
          animate={controlsName}
        >
          NATHAN CHUGITO.
        </motion.p>
        <motion.p
          className=' mt-[40px] text-xl font-medium  text-neon6'
          animate={controlsName}
        >
          Student | Frontend Devloper | Software Engineer
        </motion.p>
        <motion.p
          className=' text-xl font-medium  text-neon6'
          animate={controlsName}
        >
          based in Arlington, Texas
        </motion.p>
      </div>

      {/* Second Section */}
      <div className="h-[3000px] rounded-3xl overflow-y-auto bg-black text-white">
        <SimpleBar style={{ height: '100%' }}>
          About Me
        </SimpleBar>
      </div>
    </div>
  );
};

export default Home;
