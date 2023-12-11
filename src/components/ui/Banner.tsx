import Image from "next/image";
import profilePic from './../../assets/profile.png';

const Banner = () => {
  return (
    <section className="text-light bg-primary flex justify-center items-center">
      <br />
      <div className="container mx-auto flex justify-center lg:flex-row max-w-4xl flex-col items-center">
        <div className="lg:flex-grow w-full md:w-3/4 flex flex-col md:items-start md:text-left text-center">
          <h1 className="text-4xl lg:text-5xl md:mb-4 font-bold text-light">
           Robiul Hossain
          </h1>
          <p className="mb-8 leading-relaxed font-light">
            Front End Developer
          </p>
          <p className="md:mb-8 leading-relaxed max-w-lg">
            Hello, I am Robiul Hossain, a Front End Developer with a primary focus on crafting exceptional web experiences using Next.js and the MERN (MongoDB, Express.js, React, Node.js) stack.
          </p>
          <button type="button">Download Resume</button>
        </div>
        <div className="">
          <Image
            className=""
            alt="hero"
            src={profilePic}
            width="720px"
            height="600px"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
