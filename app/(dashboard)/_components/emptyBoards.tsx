"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export const EmptyBoards = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = async () => {
    if (!organization) return;

    try {
      await mutate({
        orgId: organization.id,
        title: "untitled",
      });
      toast.success("Board created!");
    } catch (error) {
      toast.error("Failed to create board!");
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" height={110} width={110} alt="Empty" />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button size="lg" onClick={onClick} disabled={pending}>
          Create board
        </Button>
      </div>
    </div>
  );
};
