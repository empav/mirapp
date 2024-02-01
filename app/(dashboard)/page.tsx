"use client";

import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/emptyOrg";
import BoardList from "./_components/boardList";

type HomeProps = {
  searchParams: {
    search?: string;
    favorites?: string;
  };
};

export default function Home({ searchParams }: HomeProps) {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 h-[calc(100%-80px)]">
      {organization ? (
        <BoardList orgId={organization.id} query={searchParams} />
      ) : (
        <EmptyOrg />
      )}
    </div>
  );
}
