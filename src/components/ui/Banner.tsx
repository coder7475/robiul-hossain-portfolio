import Image from "next/image";
import profilePic from "./../../assets/preview.png";
import ResumeBtn from "./ResumeBtn";

const MyDescription = () => {
  return (
    <p className="md:mb-8 leading-relaxed lg:w-2/3 text-lg font-medium">
      Hello, I am a software engineer focusing on web technologies. I am
      passionate about working across all stages of software development
      lifecycle. Currently, I am focusing on the deployment and maintenance
      stage.
    </p>
  );
};

const LeftBannerText = () => {
  return (
    <div className="lg:flex-grow w-full md:w-3/4 flex flex-col md:items-start md:text-left text-center p-8">
      <h1 className="text-4xl lg:text-5xl md:mb-4 font-bold text-light">
        Robiul Hossain
      </h1>
      <p className="mb-8 leading-relaxed text-lg font-medium">
        Software Engineer & DevOps Engineer
      </p>
      <MyDescription />
      <ResumeBtn />
    </div>
  );
};

const Banner = () => {
  return (
    <section className="flex justify-center items-center max-w-[80%] mx-auto py-14 text-medium bg-gray-100 rounded-lg shadow-lg p-4">
      <div className="container flex justify-center lg:flex-row flex-col items-center p-4">
        <LeftBannerText />
        <div className="flex items-center p-4">
          <Image
            className="rounded-lg"
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
