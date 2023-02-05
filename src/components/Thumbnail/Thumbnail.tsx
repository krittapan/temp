import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { IThumbnail } from "types/thumbnail";

export interface IThumbnailProps {
  name: string;
  image?: string;
  url?: string;
  size?: "default" | "large";
}
const Thumbnail = ({ image, name, url, size = "default" }: IThumbnailProps) => {
  return (
    <Link
      href={url || ''} 
      className={classNames(
        "mr-[12px] mb-[36px] cursor-pointer group",
        {
          "pointer-events-none": !url,
          "w-[180px]": size === "default",
          "w-[276px] ": size === "large",
        }
      )}
    >
      <div
        className={classNames(
          " w-[180px]",
          {
            " border-[1px] border-default border-solid" : !image,
            "w-[180px] h-[180px]": size === "default",
            "w-[276px] h-[276px]": size === "large",
          }
        )}
      >
        <img src={image || "/images/empty.png"} className="w-full h-full"/>
      </div>
      <div className="text-center group-hover:text-secondary duration-300 mt-[16px]">
        {name}
      </div>
    </Link>
  );
};

export default Thumbnail;
