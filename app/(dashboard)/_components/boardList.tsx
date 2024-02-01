"use client";

import { useQuery } from "convex/react";
import { EmptyBoards } from "./emptyBoards";
import { EmptyFavorites } from "./emptyFavorites";
import { EmptySearch } from "./emptySearch";
import { api } from "@/convex/_generated/api";

type OrganizationListProps = {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
};

const OrganizationList = ({ orgId, query }: OrganizationListProps) => {
  const data = useQuery(api.boards.get, { orgId });

  if (data === undefined) {
    return <div>Loading...</div>;
  }

  if (!data.length && query.search) {
    return <EmptySearch />;
  }

  if (!data.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data.length) {
    return <EmptyBoards />;
  }

  return (
    <div>
      {orgId}:{JSON.stringify(data)}
    </div>
  );
};

export default OrganizationList;
