"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { IThumbnail } from "types/thumbnail";
import Link from "next/link";
import classNames from "classnames";

export interface ISlideshowProps {
  payload: IThumbnail[];
}

const Slideshow = ({ payload }: ISlideshowProps) => {
  return (
    <Swiper
      spaceBetween={2}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {payload.map((item) => (
        <SwiperSlide key={item.id} className="!w-full mx-auto ">
          <Link
            href={item.link || "/"}
            className={classNames(
              "p-0 m-0 cursor-pointer w-full h-[420px] overflow-hidden flex items-center",
              { "border-[1px] border-solid border-default": !item.image }
            )}
          >
            <img className="w-full" src={item.image || "/images/empty.png"} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slideshow;
