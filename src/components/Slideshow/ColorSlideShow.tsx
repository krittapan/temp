"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { IThumbnail } from "types/thumbnail";
import Link from "next/link";
import classNames from "classnames";

export interface IColorSlideShowProps {
  payload: IThumbnail[];
}

const ColorSlideShow = ({ payload }: IColorSlideShowProps) => {
  const half = Math.ceil(payload.length / 2);
  const payloadTop = payload.slice(0, half);
  const payloadBottom = payload.slice(half);
  return (
    <>
      <Swiper
        slidesPerView="auto"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {payloadTop.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!w-fit  flex flex-col !-0 !mr-[24px] group"
          >
            <div
              // href={item.link || "/"}
              className="p-0 m-0 cursor-pointer h-[180px] w-[360px] overflow-hidden flex items-center"
            >
              <div
                className="w-[180px] h-[180px] flex items-center justify-center flex-col text-white text-[24px]"
                style={{
                  background: item.color || "#707070",
                }}
              >
                <div>กลุ่ม</div>
                <div>{item.name}</div>
              </div>
              <img
                className={classNames("!w-[180px]", {
                  "border-[1px] border-solid border-default": !item.image,
                })}
                src={item.image || "/images/empty.png"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
      className="mt-[16px]"
        slidesPerView="auto"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {payloadBottom.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!w-fit  flex flex-col !-0 !mr-[24px] group"
          >
            <div
              // href={item.link || "/"}
              className="p-0 m-0 cursor-pointer h-[180px] w-[360px] overflow-hidden flex items-center"
            >
              <div
                className="w-[180px] h-[180px] flex items-center justify-center flex-col text-white text-[24px]"
                style={{
                  background: item.color || "#707070",
                }}
              >
                <div>กลุ่ม</div>
                <div>{item.name}</div>
              </div>
              <img
                className={classNames("!w-[180px]", {
                  "border-[1px] border-solid border-default": !item.image,
                })}
                src={item.image || "/images/empty.png"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ColorSlideShow;
