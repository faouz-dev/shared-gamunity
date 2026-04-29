import { User } from "./users";

export type CommunityMemberStatus = "leave" | "banned" | "member";

export type CommunityGrade = {
  id: string;
  label: string;
};

export interface Community {
  id: string;
  name: string;
  description: string;
  picture?: {
    url: string;
    thumbnailUrl?: string;
  };
  owner: string;
  members: Array<{
    id: string;
  }>;
}

export type CommunityListItem = Omit<Community, "members" | "owner"> & {
  memberCount: number;
  owner: string;
  joined: boolean;
};

export interface CommunitySearchResponse {
  communities: CommunityListItem[];
  hasMore: boolean;
  nextOffset?: number;
}

export interface CommunityMemberUpdateEventBody {
  communityId: string;
  userId: string;
  action: "add" | "remove" | "grade" | "ungrade";
  grade?: string; // pour grade/ungrade
  authorId?: string; // l'utilisateur qui a déclenché l'action
}
