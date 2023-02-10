import React from "react";
import Tags from "../Tags/Tags";
import ArraysIcon from "../../images/ArraysIcon.svg";
import BSTIcon from "../../images/BSTIcon.svg";
import LinkedListIcon from "../../images/LinkedListIcon.svg";
import { easeOut, motion as m } from "framer-motion";

const Home = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: easeOut }}
      className=" container mx-auto p-2 md:p-5 w-full h-full flex flex-col gap-20"
    >
      <div>
        <div className="bg-[#D09CFA] relative border-2 md:border-4 border-black w-4/6 md:w-5/6 mx-auto px-4 py-8 md:px-32 md:py-24 flex flex-col gap-10 justify-center">
          <h1 className="text-xl md:text-5xl text-center font-extrabold">
            Prepare for success with our comprehensive interview guide. Crush
            your next coding interview with confidence.
          </h1>
          <p className="text-center mx-auto w-5/6 md:w-4/6  text-xs md:text-lg ">
            Whether you're a beginner or an experienced developer, our site is
            designed to help you showcase your skills and land your dream job.
            Get started today and take your coding career to the next level!
          </p>
          <Tags
            name='print("Hello World")'
            position="top-2 -left-6 md:top-24 md:-left-10"
          />
          <Tags
            name="function myFun()"
            position="bottom-44 -right-10 md:bottom-24 md:-right-10"
          />
          <Tags
            name="#include<stdio.h>"
            position="bottom-6 -left-12 md:bottom-16 md:-left-28"
          />
        </div>
      </div>
      <div className="bg-[#F0F0F0] w-4/6 md:w-5/6 mx-auto px-4 py-8 md:px-20 md:py-24 flex">
        <div className=" text-center lg:w-1/2">
          <h1 className="font-bold text-2xl">DSA & Algo</h1>
          <p>
            Data structures and algorithms are crucial in computer science,
            optimizing the storage and processing of data. They range from
            simple arrays to complex graphs, allowing for organized management
            of information.
          </p>
        </div>
        <div className="hidden lg:block lg:relative lg:px-10">
          <img
            src={ArraysIcon}
            alt="ArraysIcon"
            className="border-2 border-black"
          />
          <img
            src={BSTIcon}
            alt="BSTIcon"
            className=" absolute -top-32 left-72"
          />
          <img
            src={LinkedListIcon}
            alt="LinkedListIcon"
            className="border-2 border-black absolute top-32 left-60"
          />
        </div>
      </div>
    </m.div>
  );
};

export default Home;
