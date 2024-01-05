import Image from "next/image";
import profilePic from "./../../assets/profile.png";
import Link from "next/link";
import ResumeBtn from './ResumeBtn';

const Banner = () => {
  return (
    <section className="text-light flex justify-center items-center max-w-[80%] mx-auto py-15">
      <br />
      <div className="container flex justify-center lg:flex-row flex-col items-center">
        <div className="lg:flex-grow w-full md:w-3/4 flex flex-col md:items-start md:text-left text-center">
          <p className="text-[22px] py-2">Hi, I am</p>
          <h1 className="text-4xl lg:text-5xl md:mb-4 font-bold text-light">
            Robiul Hossain
          </h1>
          <p className="mb-8 leading-relaxed font-light">
            Junior Web Developer
          </p>
          <p className="md:mb-8 leading-relaxed lg:w-2/3">
            I am a skilled front end developer. Good at creating user Interface
            using React. I am currently exploring redux and nextjs. My goal is
            to become a full stack developer based on MERN stack.
          </p>
          <ResumeBtn></ResumeBtn>
        </div>
        <div className="flex items-center">
          <Image
            className=""
            alt="hero"
            src={profilePic}
            width={720}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
