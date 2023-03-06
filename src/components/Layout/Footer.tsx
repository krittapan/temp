import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="max-w-[1200px] mx-auto text-[white] pt-[30px] pb-[42px] flex justify-between flex-col md:flex-row">


        {/* Sponsor */}
        <div>
          <div>สนับสนุนโดยกองทุนพัฒนาดิจิทัลเพื่อเศรษฐกิจและสังคม</div>
          <div className="flex space-x-[8px] mb-[30px] flex-col md:flex-row">
            <Link
              href={"https://www.ku.ac.th/th"}>
              <img
                src="/images/ku.png"
                className="h-[72px]"

                alt="Kasetsart University Logo"
              />
            </Link>
            <Link
              href={"https://agro.ku.ac.th/th/"}>
              <img
                src="/images/agro.png"
                className="h-[72px]"

                alt="agro Logo "
              />
            </Link>
            <Link
              href={"https://www.facebook.com/InnoFashionKU"}>
              <img
                src="/images/inno-fashion-center.png"
                className="h-[72px]"

                alt="Inno Fashion Center Logo Logo"
              />
            </Link>
            <Link
              href={"https://kapi.ku.ac.th/"}>
              <img
                src="/images/kapi.png"
                className="h-[72px]"

                alt="KAPI Logo"
              />
            </Link>
            <Link
              href={"https://defund.onde.go.th/th/page/item/index/id/9"}>
              <img
                src="/images/de.png"
                className="h-[72px]"
                alt="DE Logo"
              />
            </Link>



          </div>
        </div>


        {/* Contact */}
        <div>
          <div className="mb-[12px]">CONTACT</div>
          <div className="">

            <div className="flex items-center space-x-[24px]">
              <img src="/images/telFooter.svg" />
              <div>02-562-5000 ต่อ 5310</div>
            </div>

            <div className="flex items-center space-x-[24px]">
              <img src="/images/line.svg" />
              <Link href={"https://page.line.me/?accountId=thaisensee&fbclid=IwAR2zNl9OgCuQpITI6P84o2VL9L4PlhpZ_NQ5YKyCYNGcEqYe-Cz4eVnr4DU"}>
                <div>@thaisensee</div>
              </Link>
            </div>

            <div className="col-span-2 mt-[24px]">
              <div className="flex space-x-[24px]">
                <Link href={"https://www.facebook.com/ThaiSensee.org/"}>
                  <img src="/images/facebookFooter.svg" />
                </Link>
                <Link href={"https://www.youtube.com/@thaisensee"}>
                  <img src="/images/youtube.svg" />
                </Link>
              </div>
            </div>
          </div>
        </div>




      </div>
    </footer>
  );
};

export default Footer;
