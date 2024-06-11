import Image from "next/image";
import profilePic from "./../../assets/preview.png";
// import Link from "next/link";
import ResumeBtn from "./ResumeBtn";

function MyDescription() {
  return (
    <p className="md:mb-8 leading-relaxed lg:w-2/3">
      I am a software engineer focusing on web technologies. I am skilled in creating client web app using
      React. I am currently exploring backend development with Node.js, TypeScript. I want to become a 
      principle software engineer in next 5 years.
    </p>
  );
}

function LeftBannerText() {
  return (
    <div className="lg:flex-grow w-full md:w-3/4 flex flex-col md:items-start md:text-left text-center">
      <p className="text-[22px] py-2 font-light">Hi, I am</p>
      <h1 className="text-4xl lg:text-5xl md:mb-4 font-bold text-light">
        Robiul Hossain
      </h1>
      <p className="mb-8 leading-relaxed">Software Enginner</p>
      <MyDescription></MyDescription>
      <ResumeBtn></ResumeBtn>
    </div>
  );
}

const Banner = () => {
  return (
    <section className="text-light flex justify-center items-center max-w-[80%] mx-auto py-15">
      <br />
      <div className="container flex justify-center lg:flex-row flex-col items-center">
        <LeftBannerText></LeftBannerText>
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
