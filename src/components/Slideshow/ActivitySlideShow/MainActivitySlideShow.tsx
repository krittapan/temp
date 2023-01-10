"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { IThumbnail } from "types/thumbnail";
import Link from "next/link";


export interface IMainActivitySlideShowProps {
  mainActivity: IThumbnail[];
}

const MainActivitySlideShow = ({ mainActivity }: IMainActivitySlideShowProps) => {
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
        {mainActivity.map((item) => (
          <SwiperSlide key={item.id} className="!w-fit  flex flex-col !-0 !mr-[24px]">
            <div>
              <Link
                href={item?.link || "/"}
                className="p-0 m-0 cursor-pointer h-[321px] w-[572px] overflow-hidden flex items-center"
              >
                <img
                  className="w-full"
                  src={item.image || "/images/empty.png"}
                />
              </Link>
            </div>

            <div className="text-[30px] mt-[15px]">{item.name}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainActivitySlideShow;
