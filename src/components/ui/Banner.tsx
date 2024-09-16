import Image from "next/image";
import profilePic from "./../../assets/preview.png";
import LeftBannerText from "./BannerComponents/LeftBannerText";

const Banner = () => {
  return (
    <section className="flex justify-center items-center max-w-[80%] mx-auto py-14 text-medium bg-gray-100 rounded-lg shadow-lg p-4 my-2">
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
