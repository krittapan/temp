import classNames from "classnames";
import React from "react";

interface IThumbnailColorProps {
  color: string;
  name: string;
  image: string;
}
const ThumbnailColor = ({ color, name, image }: IThumbnailColorProps) => {
  return (
    <div
      // href={item.link || "/"}
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
    </div>
  );
};

export default ThumbnailColor;
