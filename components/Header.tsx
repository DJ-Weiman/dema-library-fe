"use client";

import useUserTokenStore from "@/lib/store";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import userDetailsStore from "@/lib/store";

type Props = {};

const Header = (props: Props) => {
  const pathName: string = usePathname();
  const { token, username } = userDetailsStore();

  return (
    <header className="my-10 flex justify-between gap-5">
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

      <ul className="flex flex-row items-center gap-8">
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
              pathName === "/library" ? "text-blue-400" : null
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
    </header>
  );
};

export default Header;
