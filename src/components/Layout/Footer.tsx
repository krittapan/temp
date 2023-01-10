import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="max-w-[1200px] mx-auto text-[white] pt-[30px] pb-[42px] flex justify-between flex-col md:flex-row">


        {/* Contact */}
        <div>
          <div className="mb-[30px]">CONTACT</div>
          <div className="grid grid-cols-2">
            <div>TEL</div>
            <div>+66 95 564 6230</div>
            <div>LINE</div>
            <div>LINE</div>
            <div>SOCIAL</div>
            <div>THAI SENSEE</div>
          </div>
        </div>



        {/* Sponsor */}
        <div>
          <div>สนับสนุนโดยกองทุนพัฒนาดิจิทัลเพื่อเศรษฐกิจและสังคม</div>
          <div className="flex space-x-[8px] mb-[30px] flex-col md:flex-row">
            <img
              src="/images/de.png"
              width={198}
              height={98}
              alt="DE Logo"
            />
            <img
              src="/images/ku.png"
              width={98}
              height={98}
              alt="Kasetsart University Logo"
            />
            <img
              src="/images/kapi.png"
              width={98}
              height={98}
              alt="KAPI Logo"
            />
            <img
              src="/images/inno-fashion-center.png"
              width={98}
              height={98}
              alt="Inno Fashion Center Logo Logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
