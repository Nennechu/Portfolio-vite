const Card = ({ imageSrc, title, description, tags, link,more }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="w-full md:w-1/2 lg:w-1/4 p-4 transform transition-transform hover:scale-105 relative">
    <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-neon3 hover:opacity-70 relative">
      <img className="w-full h-48 object-cover" src={imageSrc} alt="Portfolio logo" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-white text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 absolute bottom-0 left-0 right-0 top-0 bg-black text-white font-bold opacity-0 hover:opacity-90 transition-opacity duration-300">
        <p className="text-xl">{more}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </a>
);

{/* Portfolio holds all the card data*/}
const Portfolio = () => {
  const projects = [
    {
      imageSrc: "src/assets/lime-flower.png",
      title: "My Portfolio",
      description: "My own Personal Portfolio",
      tags: ["#ReactJS", "#HTML", "#Tailwind CSS", "#Portfolio", "#Figma"],
      link:"/",
      more:"A responsive portfolio site using React, Vite, and Tailwind CSS to showcase projects.This is where I put all my socials and projects for people to see and where I self teach myself web devlopement and React",
    },
    {
      imageSrc: "src/assets/pet.png",
      title: "PetConnect",
      description: "A Pet Meetup App",
      tags: ["#React Native", "#CSS", "#Firebase", "#Git"],
      link:"https://github.com/rrchrn/SWE-Project-2023",
      more:"",
    },
    {
      imageSrc: "src/assets/pet.png",
      title: "PetConnect",
      description: "My own Personal Portfolio",
      tags: ["#React Native", "#CSS", "#Firebase", "#Git"],
    },
    {
      imageSrc: "src/assets/pet.png",
      title: "PetConnect",
      description: "My own Personal Portfolio",
      tags: ["#React Native", "#CSS", "#Firebase", "#Git"],
    },
    {
      imageSrc: "src/assets/pet.png",
      title: "PetConnect",
      description: "My own Personal Portfolio",
      tags: ["#React Native", "#CSS", "#Firebase", "#Git"],
    },
    {
      imageSrc: "src/assets/pet.png",
      title: "PetConnect",
      description: "My own Personal Portfolio",
      tags: ["#React Native", "#CSS", "#Firebase", "#Git"],
    },
    {
      imageSrc: "src/assets/pet.png",
      title: "PetConnect",
      description: "My own Personal Portfolio",
      tags: ["#React Native", "#CSS", "#Firebase", "#Git"],
    },
    {
      imageSrc: "src/assets/pet.png",
      title: "PetConnect",
      description: "My own Personal Portfolio",
      tags: ["#React Native", "#CSS", "#Firebase", "#Git"],
    },
    // Add more project objects as needed
  ];

  return <div className="flex flex-wrap">{projects.map((project, index) => <Card key={index} {...project} />)}</div>;
  //projects are mapped out into a new array and each project is rendered from the card component from card function
  //each card has a unique key
};

export default Portfolio;
