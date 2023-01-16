import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="max-w-[1200px] mx-auto text-[white] pt-[30px] pb-[42px] flex justify-between flex-col md:flex-row">


        {/* Sponsor */}
        <div>
          <div>สนับสนุนโดยกองทุนพัฒนาดิจิทัลเพื่อเศรษฐกิจและสังคม</div>
          <div className="flex space-x-[8px] mb-[30px] flex-col md:flex-row">
            <img
              src="/images/de.png"
              className="h-[72px]"
              alt="DE Logo"
            />
            <img
              src="/images/ku.png"
              className="h-[72px]"

              alt="Kasetsart University Logo"
            />
            <img
              src="/images/kapi.png"
              className="h-[72px]"

              alt="KAPI Logo"
            />
            <img
              src="/images/inno-fashion-center.png"
              className="h-[72px]"

              alt="Inno Fashion Center Logo Logo"
            />
          </div>
        </div>


        {/* Contact */}
        <div>
          <div className="mb-[12px]">CONTACT</div>
          <div className="">

            <div className="flex items-center space-x-[24px]"><img src="/images/telFooter.svg"/> <div>+66 95 564 6230</div></div>
           
            <div  className="flex items-center space-x-[24px]"><img src="/images/line.svg"/><div>THAI SENSEE</div></div>
            
            <div className="col-span-2 mt-[24px]">
              <div className="flex space-x-[24px]">
              <img src="/images/facebookFooter.svg"/>
              <img src="/images/instagram.svg"/>
              <img src="/images/twitter.svg"/>
              <img src="/images/youtube.svg"/>


              </div>
            </div>
          </div>
        </div>




      </div>
    </footer>
  );
};

export default Footer;
