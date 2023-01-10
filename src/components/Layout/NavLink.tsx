"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

interface INavLinkProps {
  link: string;
  label: string;
  isActive?: boolean;
}
const NavLink = ({ link, label }: INavLinkProps) => {
  const pathname = usePathname();

  const isActive = useMemo(() => {
    if (link === "/" && pathname === "/") {
      return true
    }

    if (link.slice(1) === '') return false

    return pathname.includes(link.slice(1))

  },[pathname])
  return (
    <Link
      href={link}
      className={classNames(
        "hover:text-secondary border-b-[4px] border-solid hover:border-secondary duration-300",
        {
          "border-[transparent]": !isActive,
          "border-secondary text-secondary": isActive,
        }
      )}
    >
      {label}
    </Link>
  );
};

export default NavLink;
