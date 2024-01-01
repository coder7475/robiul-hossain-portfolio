import Image from "next/image";
import profilePic from "./../../assets/profile.png";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="text-light bg-primary flex justify-center items-center max-[1200px] mx-auto">
      <br />
      <div className="container flex justify-center lg:flex-row flex-col items-center">
        <div className="lg:flex-grow w-full md:w-3/4 flex flex-col md:items-start md:text-left text-center">
          <h1 className="text-4xl lg:text-5xl md:mb-4 font-bold text-light">
            Robiul Hossain
          </h1>
          <p className="mb-8 leading-relaxed font-light">Front End Developer</p>
          <p className="md:mb-8 leading-relaxed max-[32rem]">
            Hello, I am Robiul Hossain, a Front End Developer with a primary
            focus on crafting exceptional web experiences using Next.js and the
            MERN (MongoDB, Express.js, React, Node.js) stack.
          </p>
          <div>
            <Link href="/resume/robiul_hossain_resume.pdf" download="personal">
              <div className="inline-flex border-2 items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap hover:bg-blue-500 focus:bg-blue-300 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
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
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            className=""
            alt="hero"
            src={profilePic}
            width={720}
            height={600}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
