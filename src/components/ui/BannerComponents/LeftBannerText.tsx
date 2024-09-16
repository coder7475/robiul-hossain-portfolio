import ResumeBtn from "../ResumeBtn";
import MyDescription from "./MyDescription";

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

export default LeftBannerText;
