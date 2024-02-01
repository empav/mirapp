"use client";

import { Button } from "@/components/ui/button";
import { DialogContent, Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";

const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/elements.svg"
        height={200}
        width={200}
        alt="Empty Organization"
      />
      <h2 className="text-2xl font-semibold mt-6">Welcome to Mirapp</h2>
      <p className="text-muted-foreground text-sm my-2">
        Create an organization to get started
      </p>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg">Create an Organization</Button>
        </DialogTrigger>
        <DialogContent className="p-0 bg-transparent border-none max-w-[50rem]">
          <CreateOrganization />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmptyOrg;
