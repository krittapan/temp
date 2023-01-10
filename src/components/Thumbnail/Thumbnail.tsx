import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { IThumbnail } from "types/thumbnail";

export interface IThumbnailProps {
  name: string
  image?: string
  url?: string
}
const Thumbnail = ({ image, name, url }: IThumbnailProps) => {
  return (
    <Link
      href={url}
      className={classNames("w-[180px] mr-[12px] mb-[36px] cursor-pointer group", {"pointer-events-none": !url})}
    >
      <div className="h-[180px] w-[180px] border-[1px] border-default border-solid">
        <img src={image || "/images/empty.png"} />
      </div>
      <div className="text-center group-hover:text-secondary duration-300 mt-[16px]">
        {name}
      </div>
    </Link>
  );
};

export default Thumbnail;
