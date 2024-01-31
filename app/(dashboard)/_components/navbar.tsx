"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-blue-900">
      <div className="hidden lg:flex lg:flex-1 bg-white">
        Search
      </div>
      <UserButton />
    </div>
  );
};

export default Navbar;
