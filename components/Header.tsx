"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { ReactNode, useState } from "react";
import userDetailsStore from "@/lib/store";

type navType = "LARGE" | "SMALL";

const Header = () => {
  const pathName: string = usePathname();
  const { token, username } = userDetailsStore();
  const [showNav, setShowNav] = useState(false);

  function getNavItems(navType: navType): ReactNode {
    return (
      <ul className={cn(
        'items-center',
        navType === "LARGE" ? "flex-row gap-8 hidden lg:flex" : null,
        navType === "SMALL" ? "flex flex-col gap-4" : null
      )}>
        <li>
          <Link
            href="/"
            className={cn(
              "text-slate-100 cursor-pointer capitalize",
              pathName === "/" ? "text-blue-400" : null
            )}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/books/search"
            className={cn(
              "text-slate-100 cursor-pointer capitalize",
              pathName === "/books/search" ? "text-blue-400" : null
            )}
          >
            Search
          </Link>
        </li>
        <li>
          {token ? (
            <Link href="/my-profile">
              <div>
                <p>{username}</p>
              </div>
            </Link>
          ) : (
            <Link
              href="/sign-in"
              className={cn(
                "text-slate-100 cursor-pointer capitalize",
                pathName === "/sign-in" ? "text-blue-400" : null
              )}
            >
              Login
            </Link>
          )}
        </li>
      </ul>
    )
  }

  function toggleShowNavItems(){
    setShowNav(prevState => !prevState)
  }

  return (
    <header className="my-10">
      <div className=" flex justify-between gap-5 items-center">

        <Link href="/" className="flex items-center">
          <Image
            src="/icons/logo.svg"
            alt="Dema Logo Image"
            width={40}
            height={40}
            className="invert"
          />
          <p className="text-2xl text-white ml-2 font-semibold">DemaLibrary</p>
        </Link>

        <div>
          <Bars3Icon width={40} height={40} color={showNav ? 'oklch(70.7% 0.165 254.624)' : 'white'} className="fill-white lg:hidden" onClick={toggleShowNavItems} />
          {getNavItems("LARGE")}
        </div>
      </div>

      <div className="lg:hidden mt-4">
        {showNav && getNavItems("SMALL")}
      </div>

    </header>
  );
};

export default Header;
