import classNames from "classnames";
import Link from "next/link";
import React from "react";

interface IThumbnailColorProps {
  id: string;
  color: string;
  name: string;
  image: string;
}
const ThumbnailColor = ({ id, color, name, image }: IThumbnailColorProps) => {
  return (
    <Link
      href={`/color/${id}` || "/"}
      className="p-0 m-0 cursor-pointer max-h-[260px] max-w-[520px] h-full w-full overflow-hidden flex items-center"
    >
      <div
        className="w-[50%] h-full flex items-center justify-center flex-col text-white text-[24px]"
        style={{
          background: color || "#707070",
        }}
      >
        <div>กลุ่ม</div>
        <div>{name}</div>
      </div>
      <img
        className={classNames("!w-[50%] h-full", {
          "border-[1px] border-solid border-default": !image,
        })}
        src={image || "/images/empty.png"}
      />
    </Link>
  );
};

export default ThumbnailColor;
