"use client";

import { EmptyBoards } from "./emptyBoards";
import { EmptyFavorites } from "./emptyFavorites";
import { EmptySearch } from "./emptySearch";

type OrganizationListProps = {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
};

const OrganizationList = ({ orgId, query }: OrganizationListProps) => {
  const data = []; //TODO: Change to api call

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
      {orgId}:{JSON.stringify(query)}
    </div>
  );
};

export default OrganizationList;
