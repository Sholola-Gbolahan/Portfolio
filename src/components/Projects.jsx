import React from "react";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <section className="py-20 align-element " id="projects">
      <SectionTitle text="Web creation" />

      <div className=" flex items-center gap-6 py-16 justify-between">
        <div ref={swiperNavPrevRef} className="hidden md:block">
          <MdArrowBackIosNew className="h-10 w-10 shadow-md p-2 cursor-pointer hover:bg-emerald-500 bg-gray-200" />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{delay:'4000'}}
          navigation={{
            prevEl: swiperNavPrevRef.current,
            nextEl: swiperNavNextRef.current,
          }}
          slidesPerView={1}
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavPrevRef.current;
            swiper.params.navigation.nextEl = swiperNavNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}>
          {projects.map((project) => {
            return (
              <SwiperSlide key={project.id}>
                <ProjectCards {...project} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div ref={swiperNavNextRef} className="hidden md:block">
          <MdArrowForwardIos className="h-10 w-10 shadow-md p-2 cursor-pointer hover:bg-emerald-500 bg-gray-200" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
