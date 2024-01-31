import React from "react";
import Button from "./button";
import List from "./list";

const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-900 h-full w-[6rem] flex p-4 flex-col gap-y-4 text-white">
      <List />
      <Button />
    </aside>
  );
};

export default Sidebar;
