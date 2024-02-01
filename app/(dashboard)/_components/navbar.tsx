"use client";

import { OrganizationSwitcher, UserButton, useOrganization } from "@clerk/nextjs";
import React from "react";
import Search from "./search";
import Invite from "./invite";

const Navbar = () => {
  const { organization } = useOrganization();

  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <Search />
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              },
              organizationSwitcherTrigger: {
                padding: "1em",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                justifyContent: "space-between",
                backgroundColor: "white",
              },
            },
          }}
        />
      </div>
      {organization ? (
        <div className="ml-auto">
          <Invite />
        </div>
      ) : null}
      <UserButton />
    </div>
  );
};

export default Navbar;
