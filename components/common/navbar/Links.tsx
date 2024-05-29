import { NavbarContent, NavbarItem } from '@nextui-org/navbar'
import React from 'react'
import NextLink from "next/link"
import clsx from 'clsx'
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from '@/config/site';

const Links = () => {
  return (
    <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
       
    <ul className="hidden lg:flex gap-4 justify-start ml-2">
      {siteConfig.navItems.map((item) => (
        <NavbarItem key={item.href}>
          <NextLink
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium",
            )}
            color="foreground"
            href={item.href}
          >
            {item.label}
          </NextLink>
        </NavbarItem>
      ))}
    </ul>
  </NavbarContent>
  )
}

export default Links