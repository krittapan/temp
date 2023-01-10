import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <header className="flex w-full justify-between pt-[70px] pb-[40px] items-end max-w-[1200px] mx-auto overflow-x-">
      <Link href="/" className="flex space-x-[20px] items-center leading-[38px]">
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
          <div className="">SANSEE</div>
        </div>
      </Link>
      <div className="flex space-x-[30px] text-default text-[30px]">
        <NavLink link={"/"} label="หน้าหลัก"/>
        <NavLink link={"/potential"} label="ประเมินศักยกภาพ"/>
        <NavLink link={"/community"} label="วิสาหกิจชุมชน"/>
        <NavLink link={"/knowledge"} label="คลังความรู้"/>
        <NavLink link={"/about"} label="เกี่ยวกับเรา"/>
      </div>
    </header>
  );
};

export default Navbar;
