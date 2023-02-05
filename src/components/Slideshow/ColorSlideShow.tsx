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
      <div className="flex justify-between mb-[16px]"
      >
        {payloadTop.map((item) => (
          <div
            key={item.id}
            className="!w-fit  flex  group"
          >
            <Link
              href={`/color/${item.id}`}
              className="p-0 m-0 cursor-pointer h-[132px] w-[277px] overflow-hidden flex items-center"
            >
              <div
                className="w-[132px] h-[132px] flex items-center justify-center flex-col text-white text-[24px]"
                style={{
                  background: item.color || "#707070",
                }}
              >
                <div>กลุ่ม</div>
                <div>{item.name}</div>
              </div>
              <img
                className={classNames("!w-[145px] h-full", {
                  "border-[1px] border-solid border-default": !item.image,
                })}
                src={item.image || "/images/empty.png"}
              />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        {payloadBottom.map((item) => (
          <div
            key={item.id}
            className="!w-fit  flex flex-col !-0 group"
          >
            <Link
              href={`/color/${item.id}`}
              className="p-0 m-0 cursor-pointer h-[132px] w-[277px] overflow-hidden flex items-center"
            >
              <div
                className="w-[132px] h-[132px] flex items-center justify-center flex-col text-white text-[24px]"
                style={{
                  background: item.color || "#707070",
                }}
              >
                <div>กลุ่ม</div>
                <div>{item.name}</div>
              </div>
              <img
                className={classNames("!w-[145px] h-full", {
                  "border-[1px] border-solid border-default": !item.image,
                })}
                src={item.image || "/images/empty.png"}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ColorSlideShow;
