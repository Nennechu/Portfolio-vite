import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
const Contact = () => {
    return (
      <div className="h-[835px]">
        <h1 className='text-center p-4 text-8xl'>CONTACT ME</h1>
        <div className="mx-5">
          <ContactCard platform="Email" link="mailto:nchugito@gmail.com" />
          <ContactCard platform="Instagram" link="[Your Instagram Link]" />
          <ContactCard platform="LinkedIn" link="[Your LinkedIn Link]" />
          <ContactCard platform="Discord" link="[Your Discord Link]" />
          <ContactCard platform="Email" link="mailto:nchugito@gmail.com" />
          <ContactCard platform="Instagram" link="[Your Instagram Link]" />
          <ContactCard platform="LinkedIn" link="[Your LinkedIn Link]" />
          
          {/* Add more contact cards as needed */}
        </div>
      </div>
    );
  };
  
  const ContactCard = ({ platform, link }) => {
    return (
      <div className="mb-4 p-4 border rounded cursor-pointer hover:bg-gray-100">
        <p className="text-lg font-semibold">{platform}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          {link}
        </a>
      </div>
    );
  };
  
  export default Contact;
  