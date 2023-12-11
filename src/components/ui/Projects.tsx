"use client";
// import { useEffect } from "react"
import Image from "next/image";
import Link from "next/link";

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
 
import asset1 from '/public/ItAsset/asset1.png';
import asset2 from '/public/ItAsset/asset2.png';
import asset3 from '/public/ItAsset/asset3.png';
import asset4 from '/public/ItAsset/asset4.png';
import asset5 from '/public/ItAsset/asset5.png';
import asset6 from '/public/ItAsset/asset6.png';
import asset7 from '/public/ItAsset/asset7.png';
import asset8 from '/public/ItAsset/asset8.png';
import asset9 from '/public/ItAsset/asset9.png';


function BlogProject() {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md text-slate-500 shadow-slate-200 lg:w-2/3 mx-2 lg:mx-auto mt-6 bg-primary">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper text-center"
      >
        <SwiperSlide className="">
          <Image
            src={blog1}
            alt="blog1"
            width="500px"
            height="500px"
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={blog2}
            alt="blog2"
            width="500px"
            height="500px"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={blog3}
            alt="blog3"
            width="500px"
            height="500px"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={blog4}
            alt="blog4"
            width="500px"
            height="500px"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={blog5}
            alt="blog5"
            width="500px"
            height="500px"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={blog6}
            alt="blog6"
            width="500px"
            height="500px"
            priority={false}
          />
        </SwiperSlide>
      </Swiper>
      <div className="p-6">
        <h3 className="mb-4 text-xl font-medium text-slate-700">
          A Blog Website - Robiul&apos;s blogs
        </h3>
        <p>
          A blog website where programmers can share their thoughts with each
          other. Everybody can add and update their own blog after login. They
          can comment on others blogs.
        </p>
        <Link
          href="https://programmers-blog-68efb.web.app/"
          target="_blank"
          className="inline-flex mt-3 items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-secondary hover:text-gray focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
        >
          <span>Go to Live Site!</span>
        </Link>
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <div className="bg-secondary py-2 text-gray min-h-screen ">
      <h1 className="text-4xl font-bold text-center mt-6">My Projects</h1>

      <BlogProject></BlogProject>
      <div className="overflow-hidden bg-white rounded-lg shadow-md text-slate-500 shadow-slate-200 lg:w-2/3 mx-2 lg:mx-auto mt-6 bg-primary">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper text-center"
      >
        <SwiperSlide className="">
          <Image
            src={asset1}
            alt="asset1"
            width="500px"
            height="500px"
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={asset2}
            alt="asset2"
            width="500px"
            height="500px"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={asset3}
            alt="asset3"
            width="500px"
            height="500px"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={asset4}
            alt="asset4"
            width="500px"
            height="500px"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={asset5}
            alt="asset5"
            width="500px"
            height="500px"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={asset6}
            alt="asset6"
            width="500px"
            height="500px"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={asset7}
            alt="asset6"
            width="500px"
            height="500px"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={asset8}
            alt="asset6"
            width="500px"
            height="500px"
            priority={false}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={asset9}
            alt="asset6"
            width="500px"
            height="500px"
            priority={false}
          />
        </SwiperSlide>
      </Swiper>
      <div className="p-6">
        <h3 className="mb-4 text-xl font-medium text-slate-700">
        Asset Management System Website - AssetIT
        </h3>
        <p>
        A website for a service company that provide IT assets management for other companies. Here, admin can add and remove employee. Admin can accept employees requests for assets or reject them. Admin and employee can current assets status. Admin can create assets.
        </p>
        <Link
          href="https://assetit-18c66.web.app/"
          target="_blank"
          className="inline-flex mt-3 items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-secondary hover:text-gray focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
        >
          <span>Go to Live Site!</span>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Projects;
