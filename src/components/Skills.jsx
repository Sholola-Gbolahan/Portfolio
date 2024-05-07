import React from "react";
import { useRef } from "react";

import SectionTitle from "./SectionTitle";
import { skills } from "../data";
import SkillsCard from "./SkillsCard";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Skills = () => {
  const skillsPrevRef = useRef(null);
  const skillsNextRef = useRef(null);

  return (
    <section className=" py-20 align-element" id="skills">
      <SectionTitle text="tech stack" />

      <div className="flex   gap-6 items-center py-16 justify-between">
        <div ref={skillsPrevRef}>
          <MdArrowBackIosNew className="h-10 w-10 shadow-md p-2 cursor-pointer hover:text-emerald-900" />
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          loop={true}
          slidesPerView={1}
          autoplay={{ delay: "4000" }}
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
          pagination={{ clickable: true }}
          navigation={{
            prevEl: skillsPrevRef.current,
            nextEl: skillsNextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = skillsPrevRef.current;
            swiper.params.navigation.nextEl = skillsNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}>
          {skills.map((skill) => {
            return (
              <SwiperSlide key={skill.id}>
                <SkillsCard {...skill} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div ref={skillsNextRef}>
          <MdArrowForwardIos className="h-10 w-10 shadow-md p-2 cursor-pointer hover:text-emerald-900" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
