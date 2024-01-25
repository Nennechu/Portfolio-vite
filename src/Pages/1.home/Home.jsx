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
          className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold font-open mt-[-100px] md:mt-[-150px] lg:mt-[-200px] text-neon6'
          animate={controlsHello}
        >
          HI THERE, I'M
        </motion.p>
        <motion.p
          className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold font-open text-neon6'
          animate={controlsName}
        >
          JOHN DOE
        </motion.p>
        <motion.p
          className='mt-4 text-base md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-center sm:text-left text-neon6'
          animate={controlsName}
        >
          Student | Frontend Developer | Software Engineer
        </motion.p>
        <motion.p
          className='text-base md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-center sm:text-left text-neon6'
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
