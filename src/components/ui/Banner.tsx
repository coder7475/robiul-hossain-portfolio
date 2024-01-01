import Image from "next/image";
import profilePic from "./../../assets/profile.png";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="text-light flex justify-center items-center max-w-[1200px] mx-auto my-15">
      <br />
      <div className="container flex justify-center lg:flex-row flex-col items-center">
        <div className="lg:flex-grow w-full md:w-3/4 flex flex-col md:items-start md:text-left text-center">
          <p className="text-[22px] py-2">Hi, I am</p>
          <h1 className="text-4xl lg:text-5xl md:mb-4 font-bold text-light">
            Robiul Hossain
          </h1>
          <p className="mb-8 leading-relaxed font-light">Junior Web Developer</p>
          <p className="md:mb-8 leading-relaxed lg:w-2/3">
            I am a skilled front end developer. Good at creating user Interface using React. I am currently exploring redux and nextjs. My goal is to become a full stack developer based on MERN stack.
          </p>
          <div>
            <a href="/resume/robiul_hossain_resume.pdf" download="personal">
              <div className="inline-flex border-2 items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none whitespace-nowrap hover:bg-emerald-300 focus:bg-emerald-300 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span className="order-2">Resume</span>
                <span className="relative only:-mx-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    role="graphics-symbol"
                    aria-labelledby="title-01 desc-01"
                  >
                    <title id="title-01">Download</title>
                    <desc id="desc-01">download a resume</desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
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
