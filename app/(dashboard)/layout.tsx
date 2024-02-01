import React, { PropsWithChildren } from "react";
import Sidebar from "./_components/sidebar";
import Navbar from "./_components/navbar";
import OrgSidebar from "./_components/orgsidebar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[6rem] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
