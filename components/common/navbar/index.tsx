import React from "react";
import Logo from "./Logo";
import Links from "./Links";
import { Navbar as NextUINavbar } from "@nextui-org/navbar";

const Navbar = () => {
  return (
    <>
      <NextUINavbar maxWidth="xl" position="sticky" className="">
        <Logo />
        <Links />
      </NextUINavbar>
    </>
  );
};

export default Navbar;
