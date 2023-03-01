import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <header className="flex w-full justify-between pt-[70px] pb-[40px] items-end max-w-[1200px] mx-auto overflow-x bg-white relative z-[1000]">
      <Link href="/" className="flex space-x-[20px] items-center leading-[38px] mb-[64px] sm:mb-0">
        <div>
          <img
            src="/images/logo.svg"
            width={74}
            height={93}
            alt="Thai Sensee Logo"
          />
        </div>
        <div className="text-[45px] text-default">
          <div className="">THAI</div>
          <div className="">SENSEE</div>
        </div>
      </Link>
      <div className="flex text-default text-[30px] flex-col sm:flex-row gap-x-[20px]">
        <NavLink link={"/"} label="หน้าหลัก"/>
        <NavLink link={"/potential"} label="ประเมินศักยภาพ"/>
        <NavLink link={"/community"} label="วิสาหกิจชุมชน"/>
        <NavLink link={"/knowledge"} label="คลังความรู้"/>
        <NavLink link={"/about"} label="เกี่ยวกับเรา"/>

        <div className="hidden sm:flex items-center divide-x-[1px] space-x-[4px]">
          <img src="/images/searchIcon.svg" />
          <img src="/images/userIcon.svg" className="pl-[4px]"/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
