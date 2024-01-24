import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=' flex flex-col '>
      <div className='flex-grow'>
        {/* Your main content goes here */}
      </div>
      <div className='w-full bg-neon5 text-white px-4 py-2'>
        <div className='flex justify-between items-center'>
          <div className='w-1/2'>
            <p className='text-base text-neon6 font-extrabold font-josefin'>Nathan Chugito 2024</p>
          </div>
          <div className='w-1/2 flex justify-end space-x-4'>
            <a href='#' className='text-neon6 hover:text-white'>
              <FaInstagram size={30} />
            </a>
            <a href='#' className='text-neon6 hover:text-white'>
              <FaLinkedin size={30} />
            </a>
            <a href='#' className='text-neon6 hover:text-white'>
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
