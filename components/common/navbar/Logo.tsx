import { NavbarBrand } from "@nextui-org/navbar";
import NextLink from "next/link";
import React from "react";
import {Logo as LogoIcon} from "@/components/common/icons"

const Logo = () => {
  return (
    <NavbarBrand as="li" className="gap-3 max-w-fit">
      <NextLink className="flex justify-start items-center gap-1" href="/">
        <LogoIcon />
        <p className="font-bold text-black">ACME</p>
      </NextLink>
    </NavbarBrand>
  );
};

export default Logo;
