"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";
import Search from "./search";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <Search />
      </div>
      <UserButton />
    </div>
  );
};

export default Navbar;
