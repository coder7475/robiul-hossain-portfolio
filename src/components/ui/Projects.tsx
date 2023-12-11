"use client";
// import { useEffect } from "react"
import Image from "next/image";
import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
// import all necessary images
import blog1 from "/public/blogProject/blog1.png";
import blog2 from "/public/blogProject/blog2.png";
import blog3 from "/public/blogProject/blog3.png";
import blog4 from "/public/blogProject/blog4.png";
import blog5 from "/public/blogProject/blog5.png";
import blog6 from "/public/blogProject/blog6.png";

const Projects = () => {
  return (
    <div className="bg-secondary py-2 text-gray min-h-screen ">
      <h1 className="text-4xl font-bold text-center mt-6">My Projects</h1>

      <div className="overflow-hidden bg-white rounded-lg shadow-md text-slate-500 shadow-slate-200 lg:w-2/3 mx-2 lg:mx-auto mt-6 bg-primary">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper text-center"
        >
          <SwiperSlide className="">
            <Image src={blog1} alt="blog1" width="500px" height="500px" priority={true}/>
          </SwiperSlide>
          <SwiperSlide className="">
            <Image src={blog2} alt="blog2" width="500px" height="500px" priority={false}/>
          </SwiperSlide>
          <SwiperSlide className="">
            <Image src={blog3} alt="blog3" width="500px" height="500px" priority={false}/>
          </SwiperSlide>
          <SwiperSlide className="">
            <Image src={blog4} alt="blog4" width="500px" height="500px"priority={false} />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image src={blog5} alt="blog5" width="500px" height="500px" priority={false}/>
          </SwiperSlide>
          <SwiperSlide className="">
            <Image src={blog6} alt="blog6" width="500px" height="500px" priority={false} />
          </SwiperSlide>
        </Swiper>
        <div className="p-6">
          <h3 className="mb-4 text-xl font-medium text-slate-700">
            A Blog Website - Robiul&apos;s blogs
          </h3>
          <p>
            A blog website where programmers can share their thoughts with each
            other. Everybody can add and update their own blog after login. They can comment on others blogs.

          </p>
          <Link href="https://programmers-blog-68efb.web.app/" target="_blank" className="inline-flex mt-3 items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-secondary hover:text-gray focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>Go Live!</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
